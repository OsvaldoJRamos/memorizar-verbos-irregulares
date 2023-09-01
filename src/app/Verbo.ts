export class Verbo {
    Infinitive!: string;
    Past!: string;
    PastParticiple!: string;
    Translation!: string;

    constructor(infinitive: string, past: string, pastParticiple: string, translation: string) {
        this.Infinitive = infinitive;
        this.Past = past;
        this.PastParticiple = pastParticiple;
        this.Translation = translation;
    }
}