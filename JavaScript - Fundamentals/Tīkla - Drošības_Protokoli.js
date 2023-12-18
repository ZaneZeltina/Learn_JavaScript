'use strict';

/* Interneta tīkls, kuru mēs nepārtraukti lietojam darbojas pēc principa: pieprasot datus, apstrādājot datus un atgriežot mums datus. Lai dati būtu drošībā, lielākajā daļa lapu, kas pastāv internetā izmanto kādu no drošības protokoliem. Tas ir tādēļ, lai mūsu - lietotāju dati būtu drošībā, lai ja kāds ļaundaris pārtver mūsu datus, tie būtu šifrēti, nebūtu saprotami - izmantojami. Parastas interneta lapas, kas neizmanto drošības protokolu rakstās vienkārši izmantojot http://, bet tādās izmantojot mums uzreiz parādās, ka šī lapa nav droša - savienojums ar šo vietni nav drošs. Drošības protokoli ir divu veidu: HTTPS un SSH. Ir vēl arī trešais drošības protokols: FTPS. Tie atšķirās pēc drošības līmeņiem. SSH tiek uzskatīts par labāku no drošības viedokļa, bet HTTPS tiek izmantots biežāk, jo tas ir vienkāršāks. */

/* Mēs uzreiz varam redzēt, kura lapa izmanto kādu drošības protokolu, un kura tos neizmanto. Lapas adrese, kas sākās ar https:// izmanto drošības protokolu. Burts: s nozīmē: secure - drošs. Parasta http lapa nekādi nešifrē datus, jo tā neizmanto nevienu no drošības protokoliem, tā vienkārši sūta - pieprasa datus, apstrādā datus un atgriež mums datus. Un tādā lapā datu aprite nav droša. Jeb kurš ļaundaris var pārtvert šos nešifrētos datus un izmantot ļaunprātīgos nolūkos. Ja mēs ievadām savus datus - e-pastu, paroli, internet bankas datus, tad ļoti svarīgi ir lai tā lapa izmantotu kādu no drošības protokoliem, jo ja kāds hakeris pārtvers datus, tie būs šifrēti - nesaprotami, nelietojami, bet pastāv arī iespēja, ka pat lapā, kura izmanto kādu no drošības protokoliem tiek pārtverti dati un izmantoti ļaunprātīgos nolūkos. No tāda viedokļa drošāks - labāks ir SSH drošības protokols, jo tam ir augstāgs aizsardzības līmenis. Kaut gan biežāk tiek izmantots - ir sastopams HTTPS drošības protokols, kam arī ir savas priekšrocības, bet tas nav tik drošs. Ja dati tiek pārtverti no lapas, kas izmanto HTTPS drošības protokolu, tad var izdarīt jeb ko ar mūsu lietotāju, izdzēst, izplatīt vīrusu, mainīt ierakstus utt. Bet ja tiek pārtverti dati no lapas, kas izmanto SSH drošības protokolu, tad tur jau iespējas darboties ar profilu ir ierobežotas, jo to nevar izdzēst, mainīt, ietekmēt. Var tikai pamainīt kaut kādus jua eksistējošus ierakstus. */

/* Katras lapas serverī glabājās katram lietotājam paredzēta unikāla pieejas atslēga. Tā katram ir sava. Tā ir paredzēta augstākai drošībai, jo ja tā nesakritīs ar datorā automātiski ģenerēto unikālo pieejas atslēgu, tad mēs netiksim lapā, ieslēgsies drošība. */

/* Lai pastiprinātu sava lietotāja drošību jeb kurā interneta lapā ir ieteicams lietot divu faktora verifikāciju, kas jau ir augsta līmeņa drošība, un kur ir praktiski neiespējams uzbrukt mūsu lietotājam, ietekmēt lietotāja profilu, jo drošības līmenis ir ļoti augsts, tādēļ visus kur vien  ir iespējams ir ieteicams lietot divu faktoru verifikāciju. */

/* Ja lapa izmanto HTTPS drošības protokolu, mēs pie lapas adreses saķumā redzēsim drošības atslēdziņu, kas nozīmē, ka konkrētā lapa ir droša, jo tā izmanto drošības protokolu: HTTPS, kas nozīmē, ka dati tiek šifrēti. Ja tādas atslēgas nav lapas adreses priekšā, tad mums uzreiz ir skaidrs, ka lapa neizmanto nevienu no drošības protokoliem, un tāda lapa nav droša. DRošības nolūkos tādas lapas nevajag nemaz lietot. */

/* Ir vēl viens interneta lapu veids: FTP, kurš arī var izmantot drošības protokolu, kas izskatās šādi: ftps://. Ftp lapas tiek izmantotas, lai nodotu kādus datus, datu apmaiņai, tās parasti glabā kādus datus. Apmeklējot šādas lapas ir ieteicams izmantot tās, kuras izmanto drošības protokolu. */

/* Lapas , kas neizmanto nevienu no drošības protokoliem strauji krīt reitingos, un meklētāja izdotajās rindās. */

/* Ir lapas, kas izmanto uzreiz divus drošības protokolu, piemēram lapa: Git Hub, kad atverot kādu repozitoriju - failu direktoriju mēs uzreiz redzam, ka ir iespēja strādāt izmantojot vai HTTPSS drošības protoku vai SSH drošības protokolu. SSH drošības protokola izmantošana ir sarežģītāka, jo tur ir nepieciešams pirmo reizia r to strādājot to īpaši uzstādīt, kas ir diez gan sarežģīti, bet strādājot ar: HTTPS drošības protoklu uzstādīšana ir daudz vienkāršāka. Bet strādājot ar SSH drošības protoklu, mums visi uzstādījumi, dati jāievada vienu reizi, bet izmantojot HTTPS drošības protoku, mums datii, kaut arī nedaudzi, bet katru reizi jāievada no jauna. Mums gan ir iespēja, izmantot autmātiskos datu aizpildes servisus, jo tad mums nav pašrocīgi katru reizi jāievada dati ar rokām, tas tiek izdarīts automātiski. */

/* Visi šie drošības protokli izmanto datu šifrēšanu, bet drošības protokols SSH atšķirās pēc darbības principa. HTTPS un FTPS drošības protokoli principā ir vienādi. */

/* SSH drošības protokols izmanto atsēgas, kas ir diva veida: atvērtās un slēgtās atslēgas. Atvērtās atslēgas glabājās Git Hub, katram lietotājam tās ir savas, bet aizvērtās atslēgas glabājas katram lietotājam datorā. Un darbības izmantojot SSH drošības protokolu tiek veiktas tikai tad, ja šīs abas atslēgas sakrīt. Ja sakrīt atvērtā atslēga ar slēgto atslēgu. Tā arī ir būtiskākā atšķirība SSH drošības protokolam no pārējiem drošības protokliem. Šīs te atslēgas ģenerē speciāla automatizēta programma. Savas atslēgas, kas izmanto SSH drošības protokolu mēs varam redzēt savā Git Hub profilā atverot kādu repozitoriju un nospiežot uz pogas: code. Mēs redzam, ka mums ir divas iespējas, pieslēgt attālināto repozitoriju izmantojot parasto HTTPS drošības protoku jeb pieslēgt attālināto repozitoriju izmantojot SHH drošības protolu. Drošības protokola: SSH izmantošana, uzstādīšana ir sarežģītāka, bet tā ir jāveic vienu reizi, kamēr drošības protokola HTTPS lietošana - izmantošana ir ļoti vienkārša. */

/* Mēs varam izmantot lietojot Git Hub jeb kuru no šiem variantiem, jo abi šie drošības protokoli, gan HTTPS, gan SSH ir droši. */

/* Lai saprastu kā lietot šos drošības protoklus, kā pirmo reizi uzstādīt SSH drošības protokola atslēgu, lapā Git Hub ir pamācība, kā izmantojot jeb kuru operētājsistēmu mēs varam uzstādīt drošības protokolu: SSH. Git Hub un arī internetā var atrast daudz informācijas par drošības protokoliem, kur pa katru ir sīki izskaidrots, lai labāk saprastu katra darbību, plusus un mīnusus tos izmantojot. */

/* Šāda pieeja, kad tiek piedāvāta iespēja izmantot divus drošības protokolus, vienu vai otru tiek piedāvāta vairākos servisos, ne tikai Git Hub. Un mēs varam izvēlēties, kuru no tiem mums ir ērtāk, attiecīgajā brīdī labāk lietot. Apmācības, skaidrojumi par katru no tiem ir ļoti daudz. */

/* Kadmēs izveidojam jaunu repozitoriju Git Hub servisā, mums arī tiek piedāvāts izmantot dažādus drošības protokolus. Bet musm ir jāpievērš uzmanība tam, kuru no tiem mēs esam izvēlējušies, jo brīdī kad vēlēsimies savienot lokālo direktoriju ar globālo direktoriju mums terminālī ir jāievada pareiza, atbilstoši izvēlētajaam drošības protokolam adrese, jo pretējā gadījumā mums lokālā un globālā repozitorija savienošana neizdosies. Tam ir jāpievērš īpaša uzmanība. */

