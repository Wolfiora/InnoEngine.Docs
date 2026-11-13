---
uid: api.407678fc45cab480529ca8029372a80b2fc8a286cf6234be3e00d686a04d5f9c
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.WithBindings(Inno.Build.Toolchains.NativeBindingGenerationResult)"
source: xml
reviewed: b36a8356f67c93b817249f1ef3a5617580dd0270d33797d7696bce9693b93a5b
title: "WithBindings"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Creates a scoped operation with an immutable, explicitly prepared target binding closure.

**Parameter `bindings`:** Borrowed completed generations indexed by their Native owners. Retain this result until all derived contexts finish.

**Returns:** A context sharing the existing tool selection, inputs and statistics.
