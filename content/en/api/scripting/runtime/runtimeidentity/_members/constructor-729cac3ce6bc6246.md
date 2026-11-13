---
uid: api.729cac3ce6bc6246f87a253b8d849cdb02d9b9bc760c0305f626669e9ae00b77
symbol: "scripting:Inno.Core.Identity:M:InnoEngine.Core.RuntimeIdentity.#ctor(InnoEngine.Core.IdentityDomainId,System.Int32)"
source: xml
reviewed: fce08f4ac7cb9b29123c037e141e9c795c8c188a965c3190e27bc5845385ac37
title: "Constructor"
kind: api
owners: [Inno.Core.Identity]
apiSurface: editor-script
apiScope: Runtime
---

Creates a runtime identity from its domain and generation-safe object identifier.

**Parameter `domainId`:** The identity domain that owns the runtime identifier.

**Parameter `runtimeId`:** The generation-safe runtime identifier allocated inside the domain.

**Exception `T:System.ArgumentException`:** Thrown when either value is invalid.
