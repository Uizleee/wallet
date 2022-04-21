import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

export const gqlConfig: ApolloDriverConfig = {
    autoSchemaFile: 'schema.gql',
    driver: ApolloDriver,
}
