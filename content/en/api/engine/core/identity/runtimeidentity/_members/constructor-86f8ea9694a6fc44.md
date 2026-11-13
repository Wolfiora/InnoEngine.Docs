---
uid: api.86f8ea9694a6fc4411b4970798b9fb4f273610d379dacc3124ee548ff9bd16c8
symbol: "engine:Inno.Core.Identity:M:Inno.Core.Identity.RuntimeIdentity.#ctor(Inno.Core.Identity.IdentityDomainId,System.Int32)"
source: xml
reviewed: d12d1d0d26d93a883f680d986758c55fe8f96ed68d382afe8f727537728370f1
title: "Constructor"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Creates a runtime identity from its domain and generation-safe object identifier.

**Parameter `domainId`:** The identity domain that owns the runtime identifier.

**Parameter `runtimeId`:** The generation-safe runtime identifier allocated inside the domain.

**Exception `T:System.ArgumentException`:** Thrown when either value is invalid.
