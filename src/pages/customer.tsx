import React, { useState } from "react";
import Layout from "../components/layout";
import useSWR from "swr";
import axios from "axios";
import { CoffeeType } from "../lib/models";
import { notifications } from "@mantine/notifications";

export default function CustomerPage() {
  const { data: types } = useSWR<CoffeeType[]>("/typecoffee");
  const [selected, setSelected] = useState<CoffeeType | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    try {
      await axios.post("/coffee", {
        typecoffee_id: selected.id,
        count,
        description,
        customer_name: customerName,
      });
      notifications.show({
        title: "สั่งกาแฟสำเร็จ",
        message: "ขอบคุณสำหรับการสั่งกาแฟ!",
        color: "teal",
      });
      setSelected(null);
      setCustomerName("");
      setDescription("");
      setCount(1);
    } catch (err) {
      notifications.show({
        title: "เกิดข้อผิดพลาด",
        message: "ไม่สามารถสั่งกาแฟได้",
        color: "red",
      });
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl mb-4">Order Coffee</h1>
       <div className="grid grid-cols-3 gap-4">
        {types?.map((t, idx) => (
          <div key={t.id ?? idx} className="border p-4 rounded shadow">
            <h2 className="text-xl">{t.type}</h2>
            <button
              className="mt-2 px-4 py-2 bg-orange-600 text-white rounded"
              onClick={() => setSelected(t)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
      {selected && (
        <form className="mt-8 p-4 border rounded" onSubmit={handleOrder}>
          <h2 className="text-lg mb-2">Order: {selected.type}</h2>
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Your Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            className="border p-2 mb-2 w-full"
            type="number"
            min={1}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            required
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
            Confirm Order
          </button>
          <button
            className="ml-2 px-4 py-2 bg-gray-400 text-white rounded"
            type="button"
            onClick={() => setSelected(null)}
          >
            Cancel
          </button>
        </form>
      )}
    </Layout>
  );
}