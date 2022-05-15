<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>class</title>
</head>
<body>
    <script>
        class shape{
    constructor(l,b){
        this.l=l;
        this.b=b;


    }
    area(){
        return this.l*this.b;
    }
    class triangle extends shape{
        constructor(height){
            super(b);
            this.height=height;
        }
        tri(){
            return (this.height*this.b)/2
        }
    }
}
a = new shape(2,3);
alert(a.area();

alert()
    </script>
    
</body>
</html>




