---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.453f442fc2344304644ad27cf2f2895c2926061bc3ffc37981ff30f5110ebd30
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.IEditorSelectionCoordinator.RegisterIdentityDomain(Inno.Core.Identity.IdentityAllocator)
title: IEditorSelectionCoordinator.RegisterIdentityDomain
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 7190b3792f65a364be40650a4e2d841111bb0b634fb8eaa56d415eb1baf7109a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `allocator`:** The borrowed allocator owned by that presentation's runtime session.

## Returns

A routing lease released after restoring the preceding selection.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The allocator is null.

**Exception `T:System.InvalidOperationException`:** The domain is already active or the caller is not the owner thread.

**Exception `T:System.ObjectDisposedException`:** The coordinator has retired.
