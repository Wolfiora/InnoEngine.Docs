---
uid: api.0eb8bbf7f02a3ff1b1a269bf7d851eb79c0349e804ab35482b6143a77ae63d28
symbol: "engine:Inno.Runtime:M:Inno.Runtime.GameCodeModule.#ctor(System.String,Inno.Extensibility.Modules.AssemblyDomain,System.Collections.Generic.IReadOnlyList{Inno.Runtime.GameCodeAssembly},System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: a7dc6eb40acf879ba417cb4e50576fabaea24ec49fc84c4ebe96ec4e250d8706
title: "Constructor"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Copies and validates a module contribution without retaining mutable manifest objects.

**Parameter `name`:** The stable module identity.

**Parameter `domain`:** The ownership domain of this game's code.

**Parameter `assemblies`:** The exact ordered code identities to activate.

**Parameter `dependencies`:** The logical modules that precede this contribution.

**Exception `T:System.IO.InvalidDataException`:** The module identity, domain, code or dependencies are invalid.
