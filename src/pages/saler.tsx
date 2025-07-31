import Layout from "../components/layout";
import useSWR from "swr";
import axios from "axios";
import { CoffeeOrder, CoffeeType } from "../lib/models";
import { notifications } from "@mantine/notifications";
import { Table, Paper, Title, Button, Center, Loader } from "@mantine/core";

export default function SalerPage() {
  const { data: orders, mutate, isLoading } = useSWR<CoffeeOrder[]>("/coffee");
  const { data: types } = useSWR<CoffeeType[]>("/typecoffee");

  const getType = (id: number) => types?.find((t) => t.id === id)?.type || "";

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/coffee/${id}`);
      notifications.show({
        title: "ลบออเดอร์สำเร็จ",
        message: "ออเดอร์ถูกลบเรียบร้อยแล้ว",
        color: "teal",
      });
      mutate();
    } catch (err) {
      notifications.show({
        title: "เกิดข้อผิดพลาด",
        message: "ไม่สามารถลบออเดอร์ได้",
        color: "red",
      });
    }
  };

  return (
    <Layout>
      <Center>
        <Paper shadow="md" radius="md" p="lg" mt="lg" w="100%" maw={900}>
          <Title order={2} mb="md" style={{ textAlign: "center" }}>
            Order List
          </Title>
          {isLoading ? (
            <Center py="xl">
              <Loader />
            </Center>
          ) : (
            <Table
              striped
              highlightOnHover
              withColumnBorders
              verticalSpacing="md"
              horizontalSpacing="md"
            >
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>ID</th>
                  <th style={{ textAlign: "center" }}>Coffee</th>
                  <th style={{ textAlign: "center" }}>Count</th>
                  <th style={{ textAlign: "center" }}>Description</th>
                  <th style={{ textAlign: "center" }}>Customer</th>
                  <th style={{ textAlign: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders?.length ? (
                  orders.map((o) => (
                    <tr key={o.id}>
                      <td style={{ textAlign: "center" }}>{o.id}</td>
                      <td style={{ textAlign: "center" }}>{getType(o.typecoffee_id)}</td>
                      <td style={{ textAlign: "center" }}>{o.count}</td>
                      <td style={{ textAlign: "center" }}>{o.description}</td>
                      <td style={{ textAlign: "center" }}>{o.customer_name}</td>
                      <td style={{ textAlign: "center" }}>
                        <Button
                          color="red"
                          size="xs"
                          radius="sm"
                          onClick={() => handleDelete(o.id)}
                        >
                          Delete (Finish)
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6}>
                      <Center py="md" c="dimmed">
                        No orders found.
                      </Center>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </Paper>
      </Center>
    </Layout>
  );
}