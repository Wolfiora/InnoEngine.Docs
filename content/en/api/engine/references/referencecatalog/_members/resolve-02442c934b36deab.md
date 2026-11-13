---
uid: api.02442c934b36deabde4eb74c2e32b4b06b8039d632f9c3f8be4ee2d786d4ff04
symbol: "engine:Inno.References:M:Inno.References.ReferenceCatalog.Resolve(Inno.References.ReferenceDescriptor)"
source: xml
reviewed: 918172c3bd9a79b7419b04a2fdeb311bba527905f87b254041b3a3b91a9bed17
title: "Resolve"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Resolves a persistent descriptor using the resolver selected by its kind.

**Parameter `descriptor`:** The descriptor to resolve.

**Returns:** The resolver result, an unassigned result for an empty target, or a missing result when no resolver is installed.

**Exception `T:System.ArgumentNullException`:** Thrown when `descriptor` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when a resolver returns a result for a different descriptor.
