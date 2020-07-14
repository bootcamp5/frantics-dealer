import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionCardService {

  constructor() { }

  getCards(): ActionCardItem[] {
    return this.cards;
  }

  getCardByName(name: string): ActionCardItem {
    return this.cards.find(c => c.name === name);
  }

  setAll(value:boolean){
    for(let card of this.cards){
      card.selected = value;
    }
  }
  
  cards: ActionCardItem[] = [
    {
      name: 'tsunami',
      title: 'Tsunami',
      description: 'Die erste Person in Spielrichtung legt eine belie­bige Karte offen vor sich ab. Die nächste Person muss nun eine beliebige Karte mit einem gleich hohen oder höheren Punktewert vor sich ablegen. Dieser Vorgang wird so lange wiederholt, bis jemand keine passende Karte mehr spielen kann. Diese Person muss alle abgelegten Karten auf die Hand nehmen.',
    },
    {
      name: 'parasite',
      title: 'Parasite',
      description: 'Sobald jemand die Runde gewinnt, darf die Person links von ihm/ihr zwei beliebige Handkarten abwerfen, bevor die Punkte gezählt werden.',
      finish: true,
    },
    {
      name: 'surprise-party',
      title: 'Surprise Party',
      description: 'Jeder Spieler muss einer Person seiner Wahl eine Karte aus seiner Hand schenken.',
    },
    {
      name: 'gambling-man',
      title: 'Gambling Man',
      description: 'Alle Spieler müssen von der zuletzt gespielten Farbe eine möglichst tiefe Zahlenkarte verdeckt auf den Tisch legen. Alle Karten werden gleichzeitig aufgedeckt. Der Spieler, welcher die höchste Zahl gespielt hat, muss alle Karten in seine Hand aufnehmen. Spieler, welche keine Zahlenkarte dieser Farbe auf der Hand halten, müssen zur Strafe zwei Karten ziehen. Ausnahme: Sofern noch keine Farbe gespielt wurde, ist das Ereignis wirkungslos.',
    },
    {
      name: 'recession',
      title: 'Recession',
      description: 'Der Reihe nach verwerfen die Spieler Karten aus ihrer Hand. Der erste Spieler verwirft eine Karte, der zweite Spieler verwirft zwei Karten, der Dritte drei und so weiter.',
    },
    {
      name: 'Friday',
      title: 'Friday the 13th',
      description: 'Es ist Freitag der Dreizehnte. Ein Massenmörder mit Hockey-Maske geht um… Aber nur im Film, denn es ist ein ganz normaler Freitag an dem nichts Aussergewöhnliches geschieht. Die Runde geht normal weiter.',
    },
    {
      name: 'vandalism',
      title: 'Vandalism',
      description: 'Alle Spieler müssen von der zuletzt gespielten Farbenkarte alle gleichfarbigen Handkarten abwerfen (sowohl Zahl- als auch Spezialkarten). Sofern noch keine Farbe gespielt wurde, ist das Ereignis wirkungslos.',
    },
    {
      name: 'merry-christmas',
      title: 'Merry Christmas',
      description: 'Alle Spieler müssen sämtliche Handkarten unter den Mitspielern verschenken. Die Karten können beliebig aufgeteilt werden.',
    },
    {
      name: 'russian-roulette',
      title: 'Russian Roulette',
      description: 'Alle Spieler*innen müssen je eine beliebige Karte aus ihrer Hand zusammenlegen. Diese werden gemischt und auf den Kartenstapel gelegt. Das Spiel geht danach normal weiter.',
    },
    {
      name: 'riot',
      title: 'Riot',
      description: 'Alle Spieler*innen geben ihre Spezialkarten an die Person rechts von ihnen weiter. Erhaltene Spezialkarten werden erst nach dem Ereignis auf die Hand genommen.',
    },
    {
      name: 'trust-fall',
      title: 'Trust Fall',
      description: 'Die Spieler*innen wählen der Reihe nach eine beliebige Person, die ihnen zwei Karten schenken muss.',
    },
    {
      name: 'communism',
      title: 'Communism',
      description: 'Alle Spieler müssen ihre Handkarten auf die gleiche Anzahl wie der Spieler mit meisten Handkarten ergänzen.',
    },
    {
      name: 'mating-season',
      title: 'Mating Season',
      description: 'Alle Spieler müssen sämtliche Zahlenkarten-Kombinationen, die sie auf der Hand halten, abwerfen. Als Kombinationen gelten Paare, Drillinge, Vierlinge usw. Die Farbe der Karten spielt dabei keine Rolle.',
    },
    {
      name: 'crowdfunding',
      title: 'Crowdfunding',
      description: 'Jeder muss der Person mit den wenigsten Handkarten eine Karte schenken.',
      hint: 'Bei Kartengleichstand wird allen Spieler*innen mit den wenigsten Karten je eine geschenkt. Sofern mehrere Spieler*innen die wenigsten Karten besitzen, müssen sich diese nicht gegenseitig eine Karte schenken.',
    },
    {
      name: 'robin-hood',
      title: 'Robin Hood',
      description: 'Der Spieler mit den wenigsten Karten muss seine Handkarten mit dem Spieler mit den meisten Karten tauschen.',
    },
    {
      name: 'double-taxation',
      title: 'Double Taxation',
      description: 'Alle Spieler*innen müssen die Punkte ihrer drei höchsten Handkarten zusammenzählen. Diese werden dem Kontostand umgehend angerechnet. Das Spiel geht danach normal weiter. Werden keine Punkte aufgeschrieben: Wer mit den höchsten drei Handkarten die wenigsten Punkte auf der Hand hält, nimmt 1 Karte auf, wer die zweitwenigsten hat, nimmt 2 Karten auf usw. Bei Punktegleichstand müssen die Betroffenen je gleich viele Karten ziehen.',
    },
    {
      name: 'repeat',
      title: 'Repeat',
      description: 'Wer die Schwarze Karte gespielt hat, muss ein Ereignis erneut ausführen, welches bereits aufgedeckt wurde.',
      hint: 'Falls noch keine Ereigniskarte aufgedeckt wurde, ist das Ereignis wirkungslos.',
    },
    {
      name: 'third-time-lucky',
      title: 'Third Time Lucky',
      description: 'Alle Spieler ziehen drei Karten.',
    },
    {
      name: 'event-manager',
      title: 'Event Manager',
      description: 'Es werden die obersten drei Karten vom Ereigniskarten- Stapel aufgedeckt. Die Person, die das Ereignis ausgelöst hat, wählt eines dieser Ereignisse aus, welches dann ausgeführt wird.',
    },
    {
      name: 'charity',
      title: 'Charity',
      description: 'Jeder Spieler zieht vom Mitspieler mit den meisten Karten auf der Hand eine Karte.',
      hint: 'Bei Kartengleichstand wird von allen Spielern mit den meisten Karten je eine gezogen. Sofern mehrere Spieler die meisten Karten besitzen, müssen diese nicht voneinander eine Karte ziehen.',
    },
    {
      name: 'seeing-eye',
      title: 'The All Seeing Eye',
      description: 'Alle Spieler müssen ihre Karten offen auslegen. Die Karten bleiben so lange aufgedeckt, bis alle Spieler ihr O.K. geben, sie wieder aufzunehmen und weiter zu spielen.',
    },
    {
      name: 'distributor',
      title: 'Distributor',
      description: 'Alle Spieler*innen legen ihre Handkarten als Stapel verdeckt vor die Person, welche das Ereignis ausgelöst hat. Diese schaut sich alle Kartendecks an und verteilt sie neu an die Mitspieler* innen ohne sie zu vermischen. Diese Person darf dabei ihre eigenen Handkarten nicht behalten. (Somit erhält z.B. Spielerin A die Karten von Spieler B, B die von C etc.)',
    },
    {
      name: 'black-jack',
      title: 'Black Jack',
      description: 'Der Reihe nach decken die Spieler*innen jeweils die oberste Karte vom Nachziehstapel auf, legen sie auf einen separaten Stapel und addieren laut die Punkte der aufgedeckten Karten. Die Person, die mit ihrer aufgedeckten Karte den totalen Punktewert von 21 überschreitet, muss sämtliche aufgedeckten Karten auf die Hand nehmen.',
    },
    {
      name: 'plus-one',
      title: 'Plus One',
      description: 'Für die aktuelle Runde gilt: Jedes Mal, wenn jemand Karten vom Stapel zieht, muss zusätzlich eine weitere Karte gezogen werden.',
    },
    {
      name: 'seppuku',
      title: 'Seppuku',
      description: 'Die Spieler*innen entscheiden sich der Reihe nach, ob sie Seppuku begehen wollen. Wer dies riskiert, deckt die oberste Karte vom Stapel auf. Ist diese Karte eine Zahlenkarte, werden sogleich 21 Punkte vom Punktekonto abgezogen. Sollte es eine andere Karte sein, werden zusätzliche 42 Punkte aufgebrummt. Wer sich dazu entscheidet, es nicht zu riskieren, erhält 21 Punkte. Werden keine Punkte aufgeschrieben: Falls eine Zahlenkarte gezogen wird, können zwei beliebige Karten abgeworfen werden. Sollte es eine andere Karte sein, müssen vier Karten vom Stapel gezogen werden. Wer sich dazu entscheidet, es nicht zu riskieren, muss zwei Karten vom Stapel ziehen.',
    },
    {
      name: 'chargenado',
      title: 'Chargenado',
      description: 'Alle auf dem Tisch liegenden Powerkarten werden zurück in den Powerkarten-Stapel gemischt. Anschliessend erhalten alle Spieler*innen zwei neue Powerkarten verdeckt vom Stapel.',
    },
    {
      name: 'last-chance',
      title: 'Last Chance',
      description: 'Jedes Mal wenn jemand die letzte Handkarte loswird, wird noch ein Ereignis ausgelöst.',
    },
    {
      name: 'black-hole',
      title: 'Black Hole',
      description: 'Wer das Ereignis ausgelöst hat, erhält alle in den Händen der Mitspieler*innen vorhandenen Schwarzen Karten.',
    },
    {
      name: 'doomsday',
      title: 'Doomsday',
      description: 'Das Spiel ist sofort beendet. Alle Spieler erhalten 50 Punkte.',
    },
    {
      name: 'rewind',
      title: 'Rewind',
      description: 'Der Reihe nach zieht jede*r Spieler*in die jeweils oberste Karte vom Ablagestapel bis alle total 2 Karten gezogen haben. Anschliessend wird die oberste Karte vom Nachziehstapel aufgedeckt. Auf diese Karte wird nun weitergespielt.',
      hint: 'Handelt es sich bei der nachträglich aufgedeckten Karte um eine Spezialkarte, kann die Person, die das Ereignis ausgelöst hat, den Effekt ausführen.',
    },
    {
      name: 'Identity Theft',
      title: 'Identity Theft',
      description: 'Wer die meisten Punkte auf dem Konto hat, tauscht den eigenen Punktestand mit der Person, welche am wenigsten Punkte auf dem Konto hat. Werden keine Punkte aufgeschrieben: Wer die Schwarze Karte gespielt hat, bestimmt zwei Opfer (auch sich selbst möglich), welche ihre Karten verdeckt auf den Tisch legen und ihre Plätze tauschen müssen.',
    },
    {
      name: 'tornado',
      title: 'Tornado',
      description: 'Alle Karten, die die Spieler in den Händen halten, werden zusammengelegt, neu gemischt und vom Urheber möglichst gleichmässig der Reihe nach neu verteilt.',
    },
    {
      name: 'mexican-standoff',
      title: 'Mexican Standoff',
      description: 'Alle Spieler verwerfen ihre Handkarten und ziehen der Reihe nach drei Karten vom Stapel.',
    },
    {
      name: 'expansion',
      title: 'Expansion',
      description: 'Der Reihe nach ziehen die Spieler Karten vom Kartenstapel. Der erste Spieler zieht eine Karte, der zweite Spieler zieht zwei Karten, der Dritte drei und so weiter.',
    },
    {
      name: 'plague',
      title: 'Plague',
      description: 'Es werden sofort zwei weitere Ereigniskarten der Reihe nach ausgeführt. Auch wenn die erste Ereigniskarte die Runde beenden sollte oder jemand alle Karten loswird, wird das zweite Ereignis noch so gut wie möglich ausgeführt.',
    },
    {
      name: 'Time Bomb',
      title: 'time-bomb',
      description: 'Nur noch drei Züge pro Spieler. Die Runde wird sofort beendet, sobald ein Spieler zum vierten Mal an die Reihe kommen würde. Sollte ein Spieler vor Ablauf dieser Zeit alle Karten loswerden, so bekommt er zehn Punkte abgezogen. Alle anderen kassieren eine Strafe von zehn Punkten, zusätzlich zu den Karten auf der Hand. Wenn aber keiner während dieser Frist die Runde beenden kann, zählen alle Punkte doppelt.',
    },
    {
      name: 'epic-fail',
      title: 'Epic Fail',
      description: 'Die Person mit den wenigsten Handkarten erhält sofort die «Fuck You»-Karte, egal wo sich diese gerade befindet. Falls nötig, wird die «Fuck You»-Karte aus dem Nachziehstapel oder dem Ablagestapel herausgesucht. Der Nachziehstapel wird gegebenenfalls neu gemischt.',
    },
    {
      name: 'finish-line',
      title: 'Finish Line',
      description: 'Das Spiel ist sofort beendet und die Spieler zählen die Punkte, die sie auf der Hand halten.',
    },
    {
      name: 'loot',
      title: 'Loot',
      description: 'Der Reihe nach ziehen alle Spieler*innen 3 Handkarten verdeckt von der Person rechts von ihnen. Gezogene Karten werden erst nach dem Ereignis auf die Hand genommen.',
    },
    {
      name: 'supercharge',
      title: 'Supercharge',
      description: 'Alle Mitspielenden erhalten verdeckt eine zusätzliche Powerkarte.',
    },
    {
      name: 'earthquake',
      title: 'Earthquake',
      description: 'Jeder Spieler gibt die Karten, die er auf der Hand hält, dem Spieler rechts von ihm weiter.',
    },
    {
      name: 'capitalism',
      title: 'Capitalism',
      description: 'Wer hat, dem wird gegeben. Alle Spieler*innen verdoppeln ihre Handkarten.',
    },
    
    
  ];

}


export interface ActionCardItem {
  name: string;
  title: string;
  description: string;
  hint?: string;
  selected?: boolean;
  finish?: boolean;
}
