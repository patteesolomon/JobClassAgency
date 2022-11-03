class Client 
{
    constructor(name)
    {
        this.owner = '';
        this.name = name;
        this.price = 15;
        this.getPrice = () => this.price;
    }
}

class JobTitle
{
    constructor(name)
    {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName()
    {
        return this.name;
    }
    getAge()
    {
        return this.age;
    }
    getWeight()
    {
        return this.weight;
    }
    greet()
    {
        console.log(`I am ${this.name} hello`);
    }
    eat()
    {
        this.weight++;
        this.mood++;
    }
    exercise()
    {
        this.weight--;
    }
    ageUp()
    {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+=10;
    }
    buyHamster(hamster)
    {
        this.hamsters.push(hamster);
        this.mood+=10;
        this.bankAccount-=hamster.getPrice();
    }
}

class Employer 
{
    constructor(appetizer, entree, dessert)
    {
        this.name = '';
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
        
    }
    GetName() {return this.name};
    SetName(m)
    {
        this.name = m;
    }
}

class Company extends Employer 
{
    super()
    {
        this.a = this.appetizer;
        this.b = this.entree;
        this.c = this.dessert;
    }
    constructor(namele)
    {
        super();
        this.namel = namele;
    }

    Dine(a = this.a, b = this.b, c = this.c)
    {
        return new Employer(a, b, c);
    }

    GetName(){
        return this.namel;
    }

    CookDinnerAndServe(n , a = this.a, b = this.b, c = this.c)
    {
        const e = this.Dine(a,b,c);
        e.SetName(n);
        console.log(`${this.namel} is serving ` + e.name + ' ' + 'which consists of... '); 
        console.log(`${e.appetizer} `+ ' ');
        console.log(`${e.entree} `+ ' ');
        console.log(`${e.dessert}` + ' ');
    }
}

const Jobe = new Employer('Jobe');
Jobe.CookDinnerAndServe('FATIMA_GUTTEN', 'Shnizel', 'Fried Potatos', 'Fatima');