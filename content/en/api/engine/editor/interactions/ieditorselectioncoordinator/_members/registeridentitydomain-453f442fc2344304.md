---
uid: api.453f442fc2344304644ad27cf2f2895c2926061bc3ffc37981ff30f5110ebd30
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.IEditorSelectionCoordinator.RegisterIdentityDomain(Inno.Core.Identity.IdentityAllocator)"
source: xml
reviewed: 7048073b4282d91feecfca68b9e057f022835cf913c0709c1221669923d96ab4
title: "RegisterIdentityDomain"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Registers the Core identity domain used by a temporary scene presentation.

**Parameter `allocator`:** The borrowed allocator owned by that presentation's runtime session.

**Returns:** A routing lease released after restoring the preceding selection.

**Exception `T:System.ArgumentNullException`:** The allocator is null.

**Exception `T:System.InvalidOperationException`:** The domain is already active or the caller is not the owner thread.

**Exception `T:System.ObjectDisposedException`:** The coordinator has retired.
