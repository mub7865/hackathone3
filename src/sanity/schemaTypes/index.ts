// D:\New folder\Hackathone\Hackathone-3\src\sanity\schemaTypes\index.ts
import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import { Category } from './category' // Import your category schema
import {order} from './order'
import { user } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products , Category , order, user],
}