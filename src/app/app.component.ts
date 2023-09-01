import { Component } from '@angular/core';
import { Verbo } from './Verbo';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'memorizar-verbos-irregulares';

  public opcaoSelecionada: number = 0;
  public verbos: Verbo[] = []
  public verboSelecionado: any = new Verbo("INFITINITO", "PAST", "PASTPARTICIPLE", "TRANSLATION");
  public anoAtual: number = new Date().getFullYear();

  public exibirPast: boolean = false;
  public exibirPastParticiple: boolean = false;
  public exibirTranslation: boolean = false;

  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyCFyVieO_AzH_10d3mOepvjEFfSAXk3JQY",
      authDomain: "verbos-irregulares-ba63a.firebaseapp.com",
      projectId: "verbos-irregulares-ba63a",
      storageBucket: "verbos-irregulares-ba63a.appspot.com",
      messagingSenderId: "279878999353",
      appId: "1:279878999353:web:24f251052677409b121ce8",
      measurementId: "G-LQ09LZ7YYR"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    this.selecionarVerbos();
  }

  public selecionarVerbos() {
    this.verbos = [
      new Verbo("	TO BE	", "	WAS/WERE	", "	BEEN	", "	SER, ESTAR	"),
      new Verbo("	TO BEAT	", "	BEAT	", "	BEAT	", "	DERROTAR	"),
      new Verbo("	TO BECOME	", "	BECAME	", "	BECOME	", "	TORNAR-SE	"),
      new Verbo("	TO BEGIN	", "	BEGAN	", "	BEGUN	", "	COMEÇAR	"),
      new Verbo("	TO BITE	", "	BIT	", "	BITTEN	", "	MORDER	"),
      new Verbo("	TO BLEED	", "	BLED	", "	BLED	", "	SANGRAR	"),
      new Verbo("	TO BLOW	", "	BLEW	", "	BLOWN	", "	SOPRAR	"),
      new Verbo("	TO BREAK	", "	BROKE	", "	BROKEN	", "	QUEBRAR	"),
      new Verbo("	TO BRING	", "	BROUGHT	", "	BROUGHT	", "	TRAZER	"),
      new Verbo("	TO BUILD	", "	BUILT	", "	BUILT	", "	CONSTRUIR	"),
      new Verbo("	TO BUY	", "	BOUGHT	", "	BOUGHT	", "	COMPRAR	"),
      new Verbo("	TO CATCH	", "	CAUGHT	", "	CAUGHT	", "	CAPTURAR, PEGAR	"),
      new Verbo("	TO CHOOSE	", "	CHOSE	", "	CHOSEN	", "	ESCOLHER	"),
      new Verbo("	TO COME	", "	CAME	", "	COME	", "	VIR	"),
      new Verbo("	TO COST	", "	COST	", "	COST	", "	CUSTAR	"),
      new Verbo("	TO CUT	", "	CUT	", "	CUT	", "	CORTAR	"),
      new Verbo("	TO DEAL	", "	DEALT	", "	DEALT	", "	LIDAR, NEGOCIAR	"),
      new Verbo("	TO DO	", "	DID	", "	DONE	", "	FAZER	"),
      new Verbo("	TO DRAW	", "	DREW	", "	DRAWN	", "	DESENHAR	"),
      new Verbo("	TO DREAM	", "	DREAMED, DREAMT	", "	DREAMED, DREAMT	", "	SONHAR	"),
      new Verbo("	TO DRINK	", "	DRANK	", "	DRUNK	", "	BEBER	"),
      new Verbo("	TO DRIVE	", "	DROVE	", "	DRIVEN	", "	DIRIGIR	"),
      new Verbo("	TO EAT	", "	ATE	", "	EATEN	", "	COMER	"),
      new Verbo("	TO FALL	", "	FELL	", "	FALLEN	", "	CAIR	"),
      new Verbo("	TO FEED	", "	FED	", "	FED	", "	ALIMENTAR	"),
      new Verbo("	TO FEEL	", "	FELT	", "	FELT	", "	SENTIR	"),
      new Verbo("	TO FIGHT	", "	FOUGHT	", "	FOUGHT	", "	BRIGAR	"),
      new Verbo("	TO FIND	", "	FOUND	", "	FOUND	", "	ACHAR	"),
      new Verbo("	TO FLY	", "	FLEW	", "	FLOWN	", "	VOAR	"),
      new Verbo("	TO FORGET	", "	FORGOT	", "	FORGOTTEN	", "	ESQUECER	"),
      new Verbo("	TO FORGIVE	", "	FORGAVE	", "	FORGIVEN	", "	PERDOAR	"),
      new Verbo("	TO FREEZE	", "	FROZE	", "	FROZEN	", "	CONGELAR	"),
      new Verbo("	TO GET	", "	GOT	", "	GOT, GOTTEN	", "	PEGAR, CONSEGUIR, CHEGAR RECEBER	"),
      new Verbo("	TO GIVE	", "	GAVE	", "	GIVEN	", "	DAR	"),
      new Verbo("	TO GO	", "	WENT	", "	GONE	", "	IR	"),
      new Verbo("	TO GROW	", "	GREW	", "	GROWN	", "	CRESCER	"),
      new Verbo("	TO HAVE	", "	HAD	", "	HAD	", "	TER	"),
      new Verbo("	TO HANG OUT	", "	HUNG/HANGED	", "	HUNG/HANGED	", "	PASSAR TEMPO COM AMIGOS	"),
      new Verbo("	TO HEAR	", "	HEARD	", "	HEARD	", "	OUVIR	"),
      new Verbo("	TO HIDE	", "	HID	", "	HIDDEN	", "	ESCONDER	"),
      new Verbo("	TO HIT	", "	HIT	", "	HIT	", "	ATINGIR, BATER	"),
      new Verbo("	TO HOLD	", "	HELD	", "	HELD	", "	SEGURAR, ABRAÇAR	"),
      new Verbo("	TO KEEP	", "	KEPT	", "	KEPT	", "	GUARDAR, MANTER, CONTINUAR	"),
      new Verbo("	TO KNOW	", "	KNEW	", "	KNOWN	", "	SABER, CONHECER	"),
      new Verbo("	TO LEAVE	", "	LEFT	", "	LEFT	", "	SAIR, PARTIR	"),
      new Verbo("	TO LEND	", "	LENT	", "	LENT	", "	EMPRESTAR	"),
      new Verbo("	TO LET	", "	LET	", "	LET	", "	DEIXAR, PERMITIR	"),
      new Verbo("	TO LIGHT	", "	LIT, LIGHTED	", "	LIT, LIGHTED	", "	ACENDER	"),
      new Verbo("	TO LOSE	", "	LOST	", "	LOST	", "	PERDER	"),
      new Verbo("	TO MAKE	", "	MADE	", "	MADE	", "	FAZER	"),
      new Verbo("	TO MEAN	", "	MEANT	", "	MEANT	", "	SIGNIFICAR, QUERER DIZER	"),
      new Verbo("	TO MEET	", "	MET	", "	MET	", "	ENCONTRAR	"),
      new Verbo("	TO OVERSLEEP	", "	OVERSLEPT	", "	OVERSLEPT	", "	DORMIR DEMAIS	"),
      new Verbo("	TO OVERTAKE	", "	OVERTOOK	", "	OVERTAKEN	", "	ULTRAPASSAR	"),
      new Verbo("	TO PAY	", "	PAID	", "	PAID	", "	PAGAR	"),
      new Verbo("	TO PUT	", "	PUT	", "	PUT	", "	COLOCAR	"),
      new Verbo("	TO QUIT	", "	QUIT	", "	QUIT	", "	PARAR, DESISTIR	"),
      new Verbo("	TO READ	", "	READ	", "	READ	", "	LER	"),
      new Verbo("	TO RIDE	", "	RODE	", "	RIDDEN	", "	ANDAR (A/DE)	"),
      new Verbo("	TO RING	", "	RANG	", "	RUNG	", "	TOCAR (CAMPAINHA, TELEFONE)	"),
      new Verbo("	TO RUN	", "	RAN	", "	RUN	", "	CORRER	"),
      new Verbo("	TO SAY	", "	SAID	", "	SAID	", "	DIZER	"),
      new Verbo("	TO SEE	", "	SAW	", "	SEEN	", "	VER	"),
      new Verbo("	TO SEEK	", "	SOUGHT	", "	SOUGHT	", "	PROCURAR	"),
      new Verbo("	TO SELL	", "	SOLD	", "	SOLD	", "	VENDER	"),
      new Verbo("	TO SEND	", "	SENT	", "	SENT	", "	ENVIAR	"),
      new Verbo("	TO SET	", "	SET	", "	SET	", "	PÔR	"),
      new Verbo("	TO SING	", "	SANG	", "	SUNG	", "	CANTAR	"),
      new Verbo("	TO SIT	", "	SAT	", "	SAT	", "	SENTAR	"),
      new Verbo("	TO SINK	", "	SANK	", "	SUNK	", "	AFUNDAR	"),
      new Verbo("	TO SLEEP	", "	SLEPT	", "	SLEPT	", "	DORMIR	"),
      new Verbo("	TO SPEAK	", "	SPOKE	", "	SPOKEN	", "	FALAR	"),
      new Verbo("	TO SPEED	", "	SPED/SPEEDED	", "	SPED/SPEEDED	", "	CORRER (EM VEÍCULO)	"),
      new Verbo("	TO SPEND	", "	SPENT	", "	SPENT	", "	GASTAR	"),
      new Verbo("	TO STAND	", "	STOOD	", "	STOOD	", "	FICAR DE PÉ, LEVANTAR-SE	"),
      new Verbo("	TO STRIKE	", "	STRUCK	", "	STRUCK/STRICKEN	", "	ATINGIR, GOLPEAR, ATACAR	"),
      new Verbo("	TO SWEAR	", "	SWORE	", "	SWORN	", "	JURAR	"),
      new Verbo("	TO SWIM	", "	SWAM	", "	SWUM	", "	NADAR	"),
      new Verbo("	TO TAKE	", "	TOOK	", "	TAKEN	", "	PEGAR, TOMAR, LEVAR	"),
      new Verbo("	TO TEACH	", "	TAUGHT	", "	TAUGHT	", "	ENSINAR	"),
      new Verbo("	TO TELL	", "	TOLD	", "	TOLD	", "	CONTAR, DIZER	"),
      new Verbo("	TO THINK	", "	THOUGHT	", "	THOUGHT	", "	PENSAR	"),
      new Verbo("	TO THROW UP	", "	THREW UP	", "	THROWN UP	", "	VOMITAR	"),
      new Verbo("	TO UNDERGO	", "	UNDERWENT	", "	UNDERGONE	", "	SUBMETER-SE A, SOFRER	"),
      new Verbo("	TO UNDERSTAND	", "	UNDERSTOOD	", "	UNDERSTOOD	", "	ENTENDER	"),
      new Verbo("	TO WAKE UP	", "	WOKE UP	", "	WOKEN UP	", "	ACORDAR	"),
      new Verbo("	TO WEAR	", "	WORE	", "	WORN	", "	VESTIR, USAR	"),
      new Verbo("	TO WIN	", "	WON	", "	WON	", "	GANHAR, VENCER	"),
      new Verbo("	TO WITHDRAW	", "	WITHDREW	", "	WITHDRAWN	", "	SACAR	"),
      new Verbo("	TO WRITE	", "	WROTE	", "	WRITTEN	", "	ESCREVER	")
    ]
    this.verboSelecionado = this.verbos[Math.floor(Math.random() * this.verbos.length)];
  }

  public gerarVerbo() {
    this.exibirPast = false;
    this.exibirPastParticiple = false;
    this.exibirTranslation = false;

    this.opcaoSelecionada = 0;
    this.verboSelecionado = this.verbos[Math.floor(Math.random() * this.verbos.length)];
  }
}
