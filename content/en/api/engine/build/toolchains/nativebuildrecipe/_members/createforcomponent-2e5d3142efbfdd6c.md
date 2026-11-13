---
uid: api.2e5d3142efbfdd6c2e78f3044ec548203733e1c0658b2b0a500b32923ca7570b
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildRecipe.CreateForComponent(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeComponentDescriptor,System.String,System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String})"
source: xml
reviewed: 213b375fe616a4238b4dbd262999b2d6c1fd73f764fdd3e33aa14927af327417
title: "CreateForComponent"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Declares a component's source, execution and SDK inputs before binding outputs need to exist. The artifact publisher attaches the exact selected generation before hashing or compiling.

**Parameter `context`:** The operation's checkout and previously selected host tools.

**Parameter `owner`:** The component project whose implementation participates in recipe identity.

**Parameter `component`:** The native component artifact segment.

**Parameter `targetId`:** The selected target ABI.

**Parameter `inputPaths`:** All handwritten native sources, component tools and build definitions. Selected managed bindings and generated bridges are attached by the publisher.

**Parameter `declarations`:** Ordered component arguments and generation identities.

**Parameter `implementationPaths`:** The complete explicit implementation inputs used by this component, excluding unrelated product code.

**Returns:** The frozen component declaration, without generating bindings or reading generated output. Unrelated build and Editor implementation assemblies do not affect it.

**Exception `T:System.IO.FileNotFoundException`:** A required executor or component project is absent from the checkout.
