---
uid: api.933c4c93871e5c6b5a28ccfa5925ecc8c4c01d1d28c4107d2127d3d2a0c46095
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeComponentDescriptor.#ctor(System.String,System.String,System.String,Inno.Build.Toolchains.NativeStaticBuildDefinition,System.String)"
source: xml
reviewed: 12db4d4eee425a042f213937cf0988ff575edbe1381bfdd68e1e15ef86bbd276
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Freezes portable checkout-relative owner locations without assembly-name or directory inference.

**Parameter `id`:** The portable component artifact identity.

**Parameter `nativeProject`:** The checkout-relative native project file.

**Parameter `toolchainProject`:** The checkout-relative build implementation project file.

**Parameter `staticBuild`:** The backend-owned static recipe, or null when this component has none.

**Parameter `bindingDefinition`:** The portable binding definition, or null when the component generates no bindings.

**Exception `T:System.ArgumentException`:** An identity or path is empty, absolute, or escapes its checkout.
