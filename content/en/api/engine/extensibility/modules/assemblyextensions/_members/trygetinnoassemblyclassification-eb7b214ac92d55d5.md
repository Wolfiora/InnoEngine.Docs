---
uid: api.eb7b214ac92d55d52771363fea72bc21469b3c12bdbd3d1d84e9d45dd3f2993d
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyExtensions.TryGetInnoAssemblyClassification(System.Reflection.Assembly,Inno.Extensibility.Modules.AssemblyDomain@,Inno.Extensibility.Modules.AssemblyScope@)"
source: xml
reviewed: c20e0bed61854dd23b7e0e8a7606bf48e2ab05273a9db7530693388794171cdc
title: "TryGetInnoAssemblyClassification"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Reads ownership metadata without treating an unrelated assembly as an extension.

**Parameter `assembly`:** The assembly whose declared classification is inspected.

**Parameter `domain`:** Receives the declared domain when metadata is complete.

**Parameter `scope`:** Receives the declared dependency scope when metadata is complete.

**Returns:** Whether both classifications are present and valid; outputs are default values on failure.
