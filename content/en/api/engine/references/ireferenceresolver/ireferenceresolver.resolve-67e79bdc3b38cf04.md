---
uid: api.67e79bdc3b38cf04a5e00abafd234aa5aee508f3ced786a7231cad05cfbf6b3f
symbol: "engine:Inno.References:M:Inno.References.IReferenceResolver.Resolve(Inno.References.ReferenceDescriptor)"
source: xml
reviewed: cddfc3bd882d291026163ac40639d4e57fd50e22e81088372044563557b6d7bf
title: "IReferenceResolver.Resolve"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Resolves a descriptor without mutating its owner or the authoritative catalog.

**Parameter `descriptor`:** The descriptor whose `P:Inno.References.ReferenceDescriptor.kindId` matches this resolver.

**Returns:** A complete resolution result that preserves the supplied descriptor.
