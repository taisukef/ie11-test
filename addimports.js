const fnsrc = Deno.args[0];
const fndst = Deno.args[1];
const s = await Deno.readTextFile(fnsrc);
const imports = "import 'core-js/stable'\n";
await Deno.writeTextFile(fndst, imports + s);
