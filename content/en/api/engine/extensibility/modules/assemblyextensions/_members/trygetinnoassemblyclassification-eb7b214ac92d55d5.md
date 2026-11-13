---
uid: api.eb7b214ac92d55d52771363fea72bc21469b3c12bdbd3d1d84e9d45dd3f2993d
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyExtensions.TryGetInnoAssemblyClassification(System.Reflection.Assembly,Inno.Extensibility.Modules.AssemblyDomain@,Inno.Extensibility.Modules.AssemblyScope@)"
source: xml
reviewed: ec6e04786772800db3e96940629e2eeba109ce376344a49d41331d1cf71cd9cc
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
