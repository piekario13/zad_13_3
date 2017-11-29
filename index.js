process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/process.env':
                process.stdout.write('Node: ${process.versions.node}\n');
                process.stdout.write('Nazwa uytkownika: ${process.env.LOGNAME}\n');
                process.stdout.write('Język, kodowanie: ${process.env.LANG}\n');
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});