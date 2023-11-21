import { CollectionConfig } from 'payload/types'

const Customers: CollectionConfig = {
  slug: 'customers',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
        name:"order_number",
        type:"text",
        label:"Order Number",
        required: true
    },
    {
        name: "customer_name", 
        type: "text",
        label: "Customer Name",
        required: true
      },
      {
        name: "customer_birthday", 
        type: "date",
        label: "Customer Birthday",
        required: true
      },
      {
        name: "total_amount",
        type: "number",
        label: "Total Amount",
        required: true
      },
      {
        name: "order_date",
        type: "date",
        label: "Order Date",
        required: true
      }
  ],
}

export default Customers
