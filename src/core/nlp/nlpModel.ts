import { INLPModel } from './nlpModel.interface';

export class NLPModel implements INLPModel {
    processQuery(query: string): string {
        // Позже добавим OpenAI API / Llama
        return query; // Пока просто возвращаем входной текст
    }
}
