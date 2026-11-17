---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.48be8077fd4892061d746b97e64f9270f1be2bc0e64b7bce325660a36b21360b
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.RegisterIdentityDomain(Inno.Core.Identity.IdentityAllocator)
title: EditorInteractions.RegisterIdentityDomain
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 678fa8a045f87f05f69321dcd4bcbec73c79e79018c2b584e9fb2edcc64b55f9
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
