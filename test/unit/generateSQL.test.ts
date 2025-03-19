import { generateSQL } from '../../src/api/generateSQL';

describe('generateSQL', () => {
    it('должна возвращать строку, содержащую исходный запрос', () => {
        const query = 'покажи всех пользователей';
        const sql = generateSQL(query);
        expect(sql).toContain(query);
    });
});
