---
uid: api.17de4cb3db3d8cf23226c912fe423b25890c8eb3d3b318dc623b18d841c1a040
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.Register(System.String,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly})"
source: xml
reviewed: a1376570ce4a38810cddbe24bfc6a411dcae8453fe6a375606ca2f05ed93c9b0
title: "Register"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Registers assemblies owned by an external load context.

**Parameter `moduleName`:** The module name text validated by the register operation.

**Parameter `assemblies`:** The assemblies consumed by register; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated assembly module handle that represents the completed operation.
