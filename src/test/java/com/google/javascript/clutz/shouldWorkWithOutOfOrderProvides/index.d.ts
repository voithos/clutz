declare namespace ಠ_ಠ.clutz.dep {
  class D {
    private noStructuralTyping_: any;
  }
}
declare namespace ಠ_ಠ.clutz.goog {
  function require(name: 'dep.D'): typeof ಠ_ಠ.clutz.dep.D;
}
declare module 'goog:dep.D' {
  import alias = ಠ_ಠ.clutz.dep.D;
  export default alias;
}
declare namespace ಠ_ಠ.clutz.main {
  class A {
    private noStructuralTyping_: any;
    fn (a : ಠ_ಠ.clutz.dep.D ) : void ;
  }
}
declare namespace ಠ_ಠ.clutz.goog {
  function require(name: 'main.A'): typeof ಠ_ಠ.clutz.main.A;
}
declare module 'goog:main.A' {
  import alias = ಠ_ಠ.clutz.main.A;
  export default alias;
}
