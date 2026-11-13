---
uid: api.ae39662ed69dee7322321b469043abe5476f351862dec77d031cd61235ff8a46
symbol: "engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.#ctor(System.String,Inno.Scripting.Compiler.ScriptAssemblyScope,System.String[],System.String[],System.Boolean,System.Boolean)"
source: xml
reviewed: f853c610884aa1940ea1ffa0d906dd515ed8a569f4c3646bf1a2f34accb3c37b
title: "Constructor"
kind: api
owners: [Inno.Scripting.Compiler]
apiSurface: source-clr
---

Creates a configured script assembly definition for native asset export.

**Parameter `assemblyName`:** Stable managed assembly name.

**Parameter `scope`:** Runtime or Editor API scope.

**Parameter `references`:** Referenced script assembly names.

**Parameter `defines`:** Preprocessor symbols.

**Parameter `nullable`:** Whether nullable reference analysis is enabled.

**Parameter `allowUnsafe`:** Whether unsafe source is permitted.

**Exception `T:System.ArgumentException`:** Thrown when `assemblyName` is empty.
