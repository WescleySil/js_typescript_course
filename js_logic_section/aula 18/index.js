try{
    console.log('Abri um arquivo');
    console.log('MAnipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (e) {
    console.log('Tratando o erro');
} finally {
    console.log('Sempre sou executado')
}