---
uid: api.c7895df63e9dd89664490c54445f2adab86726ecc76308c81c470126941f609c
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnedDirectory.CreateForProcessAsync(System.String,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: a47e4904bc0f317b1c199310edd9826a528c8222fbd521bacd46fe9fb7432ec1
title: "CreateForProcessAsync"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Creates a directory protected by this process lifetime when the caller can retain only file metadata. Payload consumers in other processes must register their lifetimes before using it.

**Parameter `root`:** The absolute producer root; existing directories are never adopted.

**Parameter `identity`:** A current operation's explicit 32-digit hexadecimal directory identity shared by its process participants.

**Parameter `cancellationToken`:** Cancels before the process claim is transferred.

**Returns:** The new directory, preserved until every recorded process exits and the producer retires it. No managed lease object is retained by the caller.

**Exception `T:System.IO.IOException`:** Ownership cannot be established within the boundary.

**Exception `T:System.ArgumentException`:** The producer root or current operation identity is invalid.

**Exception `T:System.IO.InvalidDataException`:** An existing operation claim is malformed, inactive, or cannot authorize this process.
