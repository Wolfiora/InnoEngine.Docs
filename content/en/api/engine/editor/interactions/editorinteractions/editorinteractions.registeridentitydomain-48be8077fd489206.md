---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.48be8077fd4892061d746b97e64f9270f1be2bc0e64b7bce325660a36b21360b
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.RegisterIdentityDomain(Inno.Core.Identity.IdentityAllocator)
title: EditorInteractions.RegisterIdentityDomain
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 7b56378b9b0016d5881227436b3e7dd8c30359025157ef6081bd4a50950e32ca
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `allocator`:** The borrowed allocator owned by the temporary runtime session.

## Returns

A routing lease; retire it after restoring Edit selection and before releasing the session.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The allocator is null.

**Exception `T:System.InvalidOperationException`:** The domain is already registered or the caller is not the owner thread.

**Exception `T:System.ObjectDisposedException`:** The interaction runtime has retired its identity routing.
