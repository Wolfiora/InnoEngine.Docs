---
uid: api.04f61defaf7ae4ab84f3d40c985c7f2dd64e7e025cbe91c04a041cf48fee3fad
symbol: "engine:Inno.Player.Runtime:M:Inno.Player.Runtime.StaticPlayerModuleActivator.#ctor(Inno.Runtime.GameCodeDeployment,System.Collections.Generic.IReadOnlyDictionary{System.String,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly}})"
source: xml
reviewed: 545445359ecbee6eb8483aace8dbdcaed0f11871fd12ca8f7064990268a2423e
title: "Constructor"
kind: api
owners: [Inno.Player.Runtime]
apiSurface: source-clr
---

Validates and freezes linked assembly ownership before the Player opens its runtime session.

**Parameter `deployment`:** The build-generated code identity closure.

**Parameter `assemblies`:** Explicit linked assembly instances grouped by logical module; values are copied.

**Exception `T:System.IO.InvalidDataException`:** A linked assembly is absent, duplicated, or owned by an undeclared module.
