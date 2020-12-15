const questions = [
    {
        q: '1. Vai jūs bieži jūtat tieksmi pēc jauniem iespaidiem, spēcīgiem pārdzīvojumiem?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    },
    {
        q: '2. Vai jūs bieži jūtat vajadzību pēc draugiem, kuri jūs saprot, spēj uzmundrināt vai just līdzi?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    },
    {
        q: '3. Vai jūs esat bezrūpīgs cilvēks?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,

    }, {
        q: '4. Vai jums neliekas, ka jums ir grūti atbildēt “nē”?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '5. Vai jūs daudz prātojat, pirms kaut ko uzsākat?',
        a: ['ne',
            'ja'
        ],
        correct: 0,
        g: 0,
    }, {
        q: '6. Vai jūs vienmēr izpildāt savus solījumus?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 3,

    }, {
        q: '7. Vai jums bieži mainās garastāvoklis?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '8. Vai jūs parasti rīkojaties un runājat, daudz nedomājot?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    }, {
        q: '9. Vai jūs bieži jūtaties nelaimīgs bez acīm redzama iemesla?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '10. Vai jūs spētu izdarīt gandrīz visu, ja būtu saderējis?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    }, {
        q: '11. Vai jūs pārņem nedrošība un apmulsums, kad gribat sākt sarunu ar simpātisku pretējā',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '12. Vai jūs reizēm zaudējat savaldību, esat dusmīgs?',
        a: ['ne',
            'ja'
        ],
        correct: 0,
        g: 3,
    }, {
        q: '13. Vai bieži rīkojaties acumirklīga noskaņojuma ietekmē?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    }, {
        q: '14. Vai bieži uztraucieties par to, ka esat izdarījis vai pateicis kaut ko tādu, ko nevajadzēja teikt vai darīt?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '15. Vai jums labāk patīk lasīt grāmatas nekā tikties ar cilvēkiem?',
        a: ['ne',
            'ja'
        ],
        correct: 0,
        g: 1,
    }, {
        q: '16. Vai esat viegli aizvainojams?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '17. Vai jums patīk bieži būt kompānijās?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    }, {
        q: '18. Vai jums ir domas, ko jūs negribētu paust citiem?',
        a: ['ne',
            'ja'
        ],
        correct: 0,
        g: 3,
    }, {
        q: '19. Vai tiesa, ka dažreiz esat enerģijas pilns, tā, ka viss iet no rokas, bet citkārt – pavisam gurds?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '20. Vai jūs dodat priekšroku šauram paziņu lokam?',
        a: ['ne',
            'ja'
        ],
        correct: 0,
        g: 1,
    }, {
        q: '21. Vai jūs bieži ļaujaties sapņiem?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '22. Ja uz jums kliedz, vai atbildat ar to pašu?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    }, {
        q: '23. Vai jums bieži neliek mieru vainas izjūta?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '24. Vai visi jūsu ieradumi ir labi un vēlami?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 3,
    }, {
        q: '25. Vai spējat ļaut vaļu savām jūtām un izlīksmoties kompānijā pēc sirds patikas?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    }, {
        q: '26. Vai jūs uzskatāt, ka esat viegli uzbudināms un jutīgs?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '27. Vai tiekat uzskatīts par jautru un dzīvespriecīgu cilvēku?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    }, {
        q: '28. Vai bieži, paveicis kaut ko svarīgu, jūs jūtat, ka būtu varējis to izdarīt labāk?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '29. Vai citu cilvēku sabiedrībā jūs vairāk klusējat?',
        a: ['ne',
            'ja'
        ],
        correct: 0,
        g: 1,
    }, {
        q: '30. Vai reizēm patenkojat?',
        a: ['ne',
            'ja'
        ],
        correct: 0,
        g: 3,
    }, {
        q: '31. Vai gadās, ka nevarat aizmigt tāpēc, ka galvā “lien” visādas domas?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '32. Ja jūs kaut ko vēlaties uzzināt, vai uzskatāt, ka labāk to izlasīt grāmatā, nevis kādam pajautāt?',
        a: ['ne',
            'ja'
        ],
        correct: 0,
        g: 1,
    }, {
        q: '33. Vai jums kādreiz ir stipri paātrināta sirdsdarbība?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '34. Vai jums patīk darbs, kas prasa pastāvīgu uzmanību?',
        a: ['ne',
            'ja'
        ],
        correct: 0,
        g: 1,
    }, {
        q: '35. Vai jums mēdz uznākt trīsas?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '36. Vai jūs vienmēr runājat tikai patiesību?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 3,
    }, {
        q: '37. Vai jums ir nepatīkami uzturēties sabiedrībā, kur cits par citu zobojas?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    }, {
        q: '38. Vai jūs esat viegli sakaitināms?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '39. Vai jums patīk darbs, kas prasa ātrumu?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    }, {
        q: '40. Vai jūs uztraucaties par nepatīkamiem notikumiem, kas varētu atgadīties?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '41. Vai jūsu gaita ir nesteidzīga?',
        a: ['ne',
            'ja'
        ],
        correct: 0,
        g: 1,
    }, {
        q: '42. Vai esat kādreiz nokavējis tikšanos vai darbu?',
        a: ['ne',
            'ja'
        ],
        correct: 0,
        g: 3,
    }, {
        q: '43. Vai jums bieži rādās murgaini sapņi?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '44. Vai tiesa, ka jums ļoti tī',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '45. Vai jūs moka kādas sāpes?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    }, {
        q: '46. Vai jūs justos ļoti nelaimīgs, ja jums ilgāku laiku būtu liegta plašāka saskarsme ar cilvēkiem?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    }, {
        q: '47. Vai varat sevi nosaukt par nervozu cilvēku?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '48. Vai starp jums pazīstamiem cilvēkiem ir tādi, kuri jums noteikti nepatīk?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 3,
    }, {
        q: '49. Vai jūs viegli apvainojaties, ja citi norāda uz jūsu kļūdām vai kādiem trūkumiem?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    }, {
        q: '50. Vai varat teikt, ka jūs esat par sevi pārliecināts cilvēks?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '51. Vai uzskatāt, ka grūti gūt patiesu baudījumu no saviesīga vakara?',
        a: ['ne',
            'ja'
        ],
        correct: 0,
        g: 1,
    }, {
        q: '52. Vai jums neliek mieru izjūta, ka esat kādā ziņā sliktāks par citiem?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '53. Vai spējat viegli ienest spraigumu diezgan garlaicīgā kompānijā?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '54. Vai gadās, ka jūs runājat par jautājumiem, kurus neizprotat?',
        a: ['ne',
            'ja'
        ],
        correct: 0,
        g: 3,
    }, {
        q: '55. Vai raizējaties par savu veselību?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }, {
        q: '56. Vai jums patīk zoboties par citiem cilvēkiem?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 1,
    }, {
        q: '57. Vai jūs ciešat no bezmiega?',
        a: ['ne',
            'ja'
        ],
        correct: 1,
        g: 2,
    }

];
