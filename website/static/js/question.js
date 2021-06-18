const quiz = [
    {
        q:'Kαθολικές μεταβλητές είναι ...',
        options:['εκείνες που ορίζονται ως global εντός συναρτήσεων','οι μεταβλητές που παίρνουν τιμή εκτός συναρτήσεων','οι μεταβλητές που περνάνε ως ορίσματα συναρτήσεων'],
        answer:1
    },
    {
        q:'Ο χώρος ονομάτων ενός module x μένει διακριτός από το χώρο ονομάτων του προγράμματος μας όταν το module εισάγεται με τον εξής τρόπο:',
        options:['import x','from x import y','from x import *'],
        answer:0
    },
    {
        q:'Ποια η τιμή της συνάρτησης: math.ceil(8.4)',
        options:['8','9','error'],
        answer:1
    },
    {
        q:'Ποιά η τιμή της συνάρτησης math.sqrt(4)',
        options:['2','2.0','16','4.0'],
        answer:1
    },
    {
        q:'H δομή try/except αποκαλύπτει συντακτικά λάθη.',
        options:['Σωστό','Λάθος'],
        answer:1
    },
    {
        q:'How many squares are there in the following figure?',
        options:['35','30','40','50'],
        answer:2,
    },
    {
        q:'Το σκέλος finally της try/except εκτελείται:',
        options:['πάντα','όταν δεν υπάρχει σφάλμα','όταν υπάρχει σφάλμα','όταν υπάρχει σφάλμα που δεν έχει προβλεφθεί'],
        answer:0,
        
    },
    {
        q:'Ποιο από τα παρακάτω στοιχεία δεν μπορεί να είναι κλειδί ενός λεξικού:',
        options:['(1,2)','[1,2]','(2,)','2','2.0','\'2\''],
        answer:1
    },
    {
        q:'Έστω το λεξικό: dd = {1: 10, 2: 20} Ποια από τις παρακάτω εντολές δίνει error:',
        options:['len(dd[1])','del dd[1]','dd[1] = 30','dd[3] = 40'],
        answer:0
    },
    {
        q:'Η εντολή type(3/2) τι τιμή θα δώσει;',
        options:['error no type value','<class int> ακέραιος αριθμός','<class float> πραγματικός αριθμός','<class divsion> διαίρεση ακεραίων'],
        answer:2
    },
    {
        q:'Τι θα τυπώσει το πρόγραμμα;',
        options:['5 5','7 5','7 7','NameError'],
        answer:1,
        img: 'static/img/1.png'
    },
    {
        q:'Τι θα τυπώσει το πρόγραμμα;',
        options:['12 5','12 12','7 5','UnboundLocalError'],
        answer:3,
        img: 'static/img/2.png'
    },
    {
        q:'Τι θα τυπώσει το πρόγραμμα;',
        options:['12 5','12 12','7 5','UnboundLocalError'],
        answer:1,
        img: 'static/img/3.png'
    },
    {
        q:'Τι θα τυπώσει το πρόγραμμα;',
        options:['1 4','5','error','3'],
        answer:1,
        img: 'static/img/5.png'
    },
    {
        q:'Τι ορίζουμε με τον παρακάτω κώδικα;',
        options:['μία λίστα και την αρχικοποίησή της','μια κλάση','μια συνάρτηση που δεν κάνει κάτι ','τίποτα από τα παραπάνω'],
        answer:2,
        img: 'static/img/6.png'
    },
    {
        q:'Τι θα επιστρέψει ο παρακάτω κώδικας;',
        options:['error','14','6','8','[2,4]'],
        answer:2,
        img: 'static/img/7.png'
    },
    {
        q:'Τι θα επιστρέψει ο κώδικας;',
        options:['error','3','3.0','9.0'],
        answer:2,
        img: 'static/img/8.png'
    },
    {
        q:'Τι θα μας επιστρέψει ο κώδικας αυτός;',
        options:['<class \'NoneType\'>','<class \'int\'>','5','<class \'float\'>','<class \'function\'>'],
        answer:3,
        img: 'static/img/9.png'
    },
    {
        q:'Tι θα δώσει ο παρακάτω κώδικας:',
        options:['error','2','1','3','6'],
        answer:1,
        img: 'static/img/10.png'
    },
    {
        q:'Τι θα τυπώσει το πρόγραμμα;',
        options:['error','5','4','7'],
        answer:2,
        img: 'static/img/11.png'
    },
    {
        q:'Ποιο το αποτέλεσμα του κώδικα:',
        options:['1','2','3','4'],
        answer:1,
        img: 'static/img/12.png'
    },
    {
        q:'Ποιο το αποτέλεσμα;',
        options:['1','2','3','4'],
        answer:2,
        img: 'static/img/13.png'
    },
    {
        q:'Tι θα δώσει ο παρακάτω κώδικας:',
        options:['8_3_12','8, 3, 12','8 3 12','3 8 12','8_3_12_'],
        answer:4,
        img: 'static/img/14.png'
    },
    {
        q:'Τι θα δώσει ο παρακάτω κώδικας:',
        options:['μήλα αχλάδια','μήλα αχλάδια πορτοκάλια τα φρούτα κάνουν καλό','μήλα αχλάδια τα φρούτα κάνουν καλό','μήλα αχλάδια πορτοκάλια','τα φρούτα κάνουν καλό'],
        answer:0,
        img: 'static/img/15.png'
    },
    {
        q:'Ποιο το αποτέλεσμα :',
        options:['σ γ α τ ό','σε γνωρίζω από την όψη','[\'σε\', \'γνωρίζω\', \'από\', \'την\', \'όψη\'\']','α γ σ τ ό','σε γνωρίζω'],
        answer:3,
        img: 'static/img/16.png'
    },
    {
        q:'Ποιο το αποτέλεσμα:',
        options:['2 3 7 8 12 end of list','2 7','2 3 7','2 3 7 end of list','2 7 end of list'],
        answer:1,
        img: 'static/img/17.png'
    },
    {
        q:'Ποιο το αποτέλεσμα;',
        options:['hello world','helloworld','ehlloworld','olleh','ehllo'],
        answer:2,
        img: 'static/img/18.png'
    },
    {
        q:'Tι θα δώσει ο παρακάτω κώδικας:',
        options:['1 3 5 7 9','1 3 5 7 9 end','1 3 5 end','1 3 5','1 3 5 7'],
        answer:3,
        img: 'static/img/19.png'
    },
    {
        q:'Τι θα δώσει ο παρακάτω κώδικας:',
        options:['3 7 11 end','3 7 11','8 12 16','8 12 16 end','3 12 4 end'],
        answer:3,
        img: 'static/img/20.png'
    },
    {
        q:'Ποιο το αποτέλεσμα :',
        options:['9 7 5','8 10 12','9 11 13','(κενό)','-8 -10 -12'],
        answer:0,
        img: 'static/img/21.png'
    },
    {
        q:'Ποιο το αποτέλεσμα:',
        options:['5','10','11','15'],
        answer:1,
        img: 'static/img/22.png'
    },
    {
        q:'Tι θα δώσει ο παρακάτω κώδικας:',
        options:['1 2 3 4 5','1 2 3 4','0 1 2 3 4','0 1 2 3 4 5'],
        answer:3,
        img: 'static/img/23.png'
    },
    {
        q:'Τι κάνει ο παρακάτω κώδικας:',
        options:['ζητάει από το χρήστη τους αριθμούς από 10 έως 99','ζητάει από το χρήστη ένα αριθμό μέχρι αυτός να δώσει διψήφιο αριθμό ','ζητάει έναν αριθμό μεταξύ 10 και 99 και ελέγχει αν είναι ακέραιος','ζητάει ένα αριθμό μεταξύ 10 και 99 και απαντάει μόνο αν ο αριθμός είναι ακέραιος'],
        answer:1,
        img: 'static/img/24.png'
    },
    {
        q:'Ποιο το αποτέλεσμα :',
        options:['το πρόγραμμα δημιουργεί το ποιήμα poem με κενές γραμμές','το πρόγραμμα προσθέτει το κείμενο που δίνει ο χρήστης σε διαδοχικές γραμμές στην poem μέχρι να πατήσει enter','το πρόγραμμα περιμένει μέχρι ο χρήστης να δώσει ένα κενό χαρακτήρα και τότε σταματάει','το πρόγραμμα ελέγχει για κενά στις γραμμές που δίνει ο χρήστης στην input'],
        answer:1,
        img: 'static/img/25.png'
    },
    {
        q:'Ποια η τιμή της παράστασης;',
        options:['[2, 4, 6]','[0, 2, 4] ','[0, 1, 2]','[0, 1, 2, 3, 4]'],
        answer:1,
        img: 'static/img/26.png'
    },
    {
        q:'Ποια η τιμή του l',
        options:['[48, 49, 98, 99]','[51, 52, 101, 102]','[1, 2, 3, ... 98, 99]','[3, 4, 5, ... 101, 102]'],
        answer:1,
        img: 'static/img/27.png'
    },
    {
        q:'Ποια η τιμή της έκφρασης:',
        options:['True','False','error'],
        answer:1,
        img: 'static/img/31.png'
    },
    {
        q:'Έστω ο παρακάτω κώδικας ο οποίος εκτελείται για τιμές y, z = 5, 1.Ποιό το αποτέλεσμα;',
        options:['error','5','5.0','5.00'],
        answer:0,
        img: 'static/img/34.png'
    },
    {
        q:'Ποια η τιμή της μεταβλητής f',
        options:['Είναι το περιεχόμενο του αρχείου file','Είναι τo όνομα του αρχείου file','Είναι ένα αντικείμενο τύπου αρχείου'],
        answer:2,
        img: 'static/img/36.png'
    },
    {
        q:'Περιγράψτε τι κάνει ο παρακάτω κώδικας:',
        options:['Δίνει error','τυπώνει το περιεχόμενο του αρχείου γραμμή-γραμμή','τυπώνει το περιεχόμενο του αρχείου χαρακτήρα-χαρακτήρα','τυπώνει το περιεχόμενο του αρχείου με κενά ανάμεσα στις γραμμές'],
        answer:1,
        img: 'static/img/37.png'
    },
    {
        q:'Τι μάς επιστρέφει η παρακάτω εντολή:',
        options:['μας επιστρέφει τον φάκελο στον οποίο έχει εγκατασταθεί η python','μας επιστρέφει την έκδοση του λειτουργικού μας συστήματος','μας επιστρέφει την έκδοση της python στον υπολογιστή μας','μας επιστρέφει το φάκελο στον οποίο βρίσκεται το πρόγραμμά μας'],
        answer:3,
        img: 'static/img/38.png'
    },
    {
        q:'Τι μάς επιστρέφει η παρακάτω εντολή:',
        options:['μας δίνει το όνομα του τρέχοντος φακέλου εργασίας μας','μας δίνει μια λίστα με το περιεχόμενο του τρέχοντος φακέλου εργασίας μας','μας δίνει μια λίστα με τα ονόματα των υποφακέλων του τρέχοντος φακέλου εργασίας μας','μας δίνει το όνομα του φακέλου εγκατάστασης της python στον υπολογιστή μας'],
        answer:1,
        img: 'static/img/39.png'
    },
    {
        q:'Έαν f είναι το όνομα ενός αρχείου και d του φακέλου στον οποίο βρίσκεται, ποιο το αποτέλεσμα',
        options:['d','f','error','το πλήρες όνομα του αρχείου, d/f'],
        answer:0,
        img: 'static/img/41.png'
    },
    {
        q:'Ποια η τιμή της c ;',
        options:['Το πλήθος των αρχείων του φακέλου εργασίας μας','Το πλήθος των αρχείων των φακέλων και υποφακέλων του φακέλου εργασίας μας','Το πλήθος των υποφακέλων του φακέλου εργασίας μας','Το πλήθος των αρχείων του υπολογιστή μας','Το πλήθος των αρχείων του φακέλου εγκατάστασης της python'],
        answer:1,
        img: 'static/img/42.png'
    },
    {
        q:'Ποιο το αποτέλεσμα;',
        options:['‘a’','97','TypeError','940'],
        answer:0,
        img: 'static/img/43.png'
    },
    {
        q:'Ποιο το αποτέλεσμα:',
        options:['‘6’','‘123456’','5','IndexError'],
        answer:3,
        img: 'static/img/44.png'
    },
    {
        q:'Ποιο το αποτέλεσμα:',
        options:['[1,2,4,4]',' [1,2,8]',' [1,2,[4,4]]'],
        answer:0,
        img: 'static/img/45.png'
    },
    {
        q:'Ποιο το αποτέλεσμα;',
        options:['[5,15]','10','[5,10]','1'],
        answer:1,
        img: 'static/img/46.png'
    },
    {
        q:'Ποιο το αποτέλεσμα:',
        options:['(1,2)','2','(2,)','(2,3)'],
        answer:2,
        img: 'static/img/47.png'
    },
    {
        q:'Ποιό το αποτέλεσμα των εντολών:',
        options:['error no power to 0.5','2','20','2.0'],
        answer:3,
        img: 'static/img/49.png'
    },
    {
        q:'Αν b = 3 Ποιά η τιμή του a',
        options:['6.5','13.5','9.5','error'],
        answer:1,
        img: 'static/img/50.png'
    },
    {
        q:'Με ποιά εντολή τυπώνουμε;',
        options:['printf()','type()','print()','console.log()'],
        answer:2
    },
    {
        q:'H Python είναι γλώσσα μόνο διαδικαστικού προγραμματισμού',
        options:['Σωστό','Λάθος'],
        answer:1
    },
    {
        q:'Με ποιό τρόπο ορίζουμε μια συνάρτηση πχ. sum',
        options:['def symm()','func sym()','int symm()'],
        answer:0
    },
    
];

// this is the questions sort of database as i didn't manage to load data from database to user via javascript