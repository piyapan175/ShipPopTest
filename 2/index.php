<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SHIPPOP Test 2</title>
</head>
<body>
<textarea style="width:80px; height:200px; text-align: left;  resize: none; overflow: hidden;" readonly><?php
    function first($size)
    {
        for($i = 0; $i <= $size; $i++)
        {
            for($j = 0; $j <= $size - $i; $j++)
                echo " ";
            for($k = 0; $k <= $i; $k++)
                echo 'O';
            echo "\n";
        }
    }
    function second($size)
    {
        for($i = 0; $i <= $size; $i++)
        {
            for($j = 0; $j <= $size - $i; $j++)
                echo " ";
            for($k = 0; $k <= $i; $k++)
                echo 'O';
            for($l = 0; $l <= $i - 1; $l++)
                echo 'O';
            echo "\n";
        }
    }
    echo "1.\n";
    first(4);
    echo "\n2.\n";
    second(4);
    ?></textarea>
</body>
</html>
