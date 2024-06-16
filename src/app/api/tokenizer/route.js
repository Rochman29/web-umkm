import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

const snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SECRET,
  clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

/**
 *
 * @param {Request} request
 */
export async function POST(request) {
  const { customer, id, gross_amount, products } = await request.json();
  const first_name = customer.name.split(" ").slice(0, -1).join(" ");
  const last_name = customer.name.split(" ").slice(-1).join(" ");
  //   console.log(console.log(request));
  let parameter = {
    item_details: products,
    customer_details: {
      first_name,
      last_name,
      phone: customer.phone,
    },
    transaction_details: {
      order_id: id,
      gross_amount,
    },
  };
  const token = await snap.createTransactionToken(parameter);
  console.log(token);
  return NextResponse.json({ token });
}
