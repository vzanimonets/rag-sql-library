import { ISQLGenerator } from './sqlGenerator.interface';

export class SQLGenerator implements ISQLGenerator {
    generateSQL(query: string): string {
        return `-- SQL-запрос сгенерирован для: ${query}`;
    }
}
