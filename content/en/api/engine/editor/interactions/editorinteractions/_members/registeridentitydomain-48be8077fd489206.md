---
uid: api.48be8077fd4892061d746b97e64f9270f1be2bc0e64b7bce325660a36b21360b
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.RegisterIdentityDomain(Inno.Core.Identity.IdentityAllocator)"
source: xml
reviewed: 29c7b9551ea09361ac5ac56c31ffe3b9da344884d2ccb9ec01998193810711dc
title: "RegisterIdentityDomain"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Makes a temporary Core identity domain available to selection, focus and drag resolution.

**Parameter `allocator`:** The borrowed allocator owned by the temporary runtime session.

**Returns:** A routing lease; retire it after restoring Edit selection and before releasing the session.

**Exception `T:System.ArgumentNullException`:** The allocator is null.

**Exception `T:System.InvalidOperationException`:** The domain is already registered or the caller is not the owner thread.

**Exception `T:System.ObjectDisposedException`:** The interaction runtime has retired its identity routing.
