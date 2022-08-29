export default (await import('vue')).defineComponent({
name: 'HelloWorld',
props: {
msg: String
}
});
function __VLS_template() {
import * as __VLS_types from './__VLS_types.js';
const __VLS_types: typeof import('./__VLS_types.js');

const __VLS_options = {
...({
name: 'HelloWorld',
props: {
msg: String
}
}),
};

const __VLS_name = (await import('./__VLS_types.js')).getNameOption({
name: 'HelloWorld',
props: {
msg: String
}
} as const);
let __VLS_ctx!: __VLS_types.PickNotAny<__VLS_Ctx, {}> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_component, new () => {}>> & {};
let __VLS_vmUnwrap!: typeof __VLS_options & { components: {}; };
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_component extends { components: infer C; } ? C : {}> & __VLS_types.GlobalComponents & typeof __VLS_vmUnwrap.components & __VLS_types.PickComponents<typeof __VLS_ctx>;
let __VLS_selfComponent!: __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_selfComponent, keyof typeof __VLS_otherComponents>;
__VLS_components. /* __VLS_.SearchTexts.Components */;
({} as __VLS_types.GlobalAttrs). /* __VLS_.SearchTexts.GlobalAttrs */;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
{
<div class={"\u0068\u0065\u006c\u006c\u006f"}></div>;
{
<h1></h1>;
(__VLS_ctx.msg);
[msg,];
}
{
<p></p>;
{
<br></br>;
}
{
<a href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0063\u006c\u0069\u002e\u0076\u0075\u0065\u006a\u0073\u002e\u006f\u0072\u0067"} target={"\u005f\u0062\u006c\u0061\u006e\u006b"} rel={"\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"}></a>;
}
}
{
<h3></h3>;
}
{
<ul></ul>;
{
<li></li>;
{
<a href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0067\u0069\u0074\u0068\u0075\u0062\u002e\u0063\u006f\u006d\u002f\u0076\u0075\u0065\u006a\u0073\u002f\u0076\u0075\u0065\u002d\u0063\u006c\u0069\u002f\u0074\u0072\u0065\u0065\u002f\u0064\u0065\u0076\u002f\u0070\u0061\u0063\u006b\u0061\u0067\u0065\u0073\u002f\u0025\u0034\u0030\u0076\u0075\u0065\u002f\u0063\u006c\u0069\u002d\u0070\u006c\u0075\u0067\u0069\u006e\u002d\u0062\u0061\u0062\u0065\u006c"} target={"\u005f\u0062\u006c\u0061\u006e\u006b"} rel={"\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"}></a>;
}
}
{
<li></li>;
{
<a href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0067\u0069\u0074\u0068\u0075\u0062\u002e\u0063\u006f\u006d\u002f\u0076\u0075\u0065\u006a\u0073\u002f\u0076\u0075\u0065\u002d\u0063\u006c\u0069\u002f\u0074\u0072\u0065\u0065\u002f\u0064\u0065\u0076\u002f\u0070\u0061\u0063\u006b\u0061\u0067\u0065\u0073\u002f\u0025\u0034\u0030\u0076\u0075\u0065\u002f\u0063\u006c\u0069\u002d\u0070\u006c\u0075\u0067\u0069\u006e\u002d\u0065\u0073\u006c\u0069\u006e\u0074"} target={"\u005f\u0062\u006c\u0061\u006e\u006b"} rel={"\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"}></a>;
}
}
}
{
<h3></h3>;
}
{
<ul></ul>;
{
<li></li>;
{
<a href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0076\u0075\u0065\u006a\u0073\u002e\u006f\u0072\u0067"} target={"\u005f\u0062\u006c\u0061\u006e\u006b"} rel={"\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"}></a>;
}
}
{
<li></li>;
{
<a href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0066\u006f\u0072\u0075\u006d\u002e\u0076\u0075\u0065\u006a\u0073\u002e\u006f\u0072\u0067"} target={"\u005f\u0062\u006c\u0061\u006e\u006b"} rel={"\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"}></a>;
}
}
{
<li></li>;
{
<a href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0063\u0068\u0061\u0074\u002e\u0076\u0075\u0065\u006a\u0073\u002e\u006f\u0072\u0067"} target={"\u005f\u0062\u006c\u0061\u006e\u006b"} rel={"\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"}></a>;
}
}
{
<li></li>;
{
<a href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0074\u0077\u0069\u0074\u0074\u0065\u0072\u002e\u0063\u006f\u006d\u002f\u0076\u0075\u0065\u006a\u0073"} target={"\u005f\u0062\u006c\u0061\u006e\u006b"} rel={"\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"}></a>;
}
}
{
<li></li>;
{
<a href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006e\u0065\u0077\u0073\u002e\u0076\u0075\u0065\u006a\u0073\u002e\u006f\u0072\u0067"} target={"\u005f\u0062\u006c\u0061\u006e\u006b"} rel={"\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"}></a>;
}
}
}
{
<h3></h3>;
}
{
<ul></ul>;
{
<li></li>;
{
<a href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u006f\u0075\u0074\u0065\u0072\u002e\u0076\u0075\u0065\u006a\u0073\u002e\u006f\u0072\u0067"} target={"\u005f\u0062\u006c\u0061\u006e\u006b"} rel={"\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"}></a>;
}
}
{
<li></li>;
{
<a href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0076\u0075\u0065\u0078\u002e\u0076\u0075\u0065\u006a\u0073\u002e\u006f\u0072\u0067"} target={"\u005f\u0062\u006c\u0061\u006e\u006b"} rel={"\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"}></a>;
}
}
{
<li></li>;
{
<a href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0067\u0069\u0074\u0068\u0075\u0062\u002e\u0063\u006f\u006d\u002f\u0076\u0075\u0065\u006a\u0073\u002f\u0076\u0075\u0065\u002d\u0064\u0065\u0076\u0074\u006f\u006f\u006c\u0073\u0023\u0076\u0075\u0065\u002d\u0064\u0065\u0076\u0074\u006f\u006f\u006c\u0073"} target={"\u005f\u0062\u006c\u0061\u006e\u006b"} rel={"\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"}></a>;
}
}
{
<li></li>;
{
<a href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0076\u0075\u0065\u002d\u006c\u006f\u0061\u0064\u0065\u0072\u002e\u0076\u0075\u0065\u006a\u0073\u002e\u006f\u0072\u0067"} target={"\u005f\u0062\u006c\u0061\u006e\u006b"} rel={"\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"}></a>;
}
}
{
<li></li>;
{
<a href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0067\u0069\u0074\u0068\u0075\u0062\u002e\u0063\u006f\u006d\u002f\u0076\u0075\u0065\u006a\u0073\u002f\u0061\u0077\u0065\u0073\u006f\u006d\u0065\u002d\u0076\u0075\u0065"} target={"\u005f\u0062\u006c\u0061\u006e\u006b"} rel={"\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"}></a>;
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
let __VLS_component!: typeof import('./HelloWorld.vue')['default'];
