---
uid: api.9fd3a5a32e8e69fd5f2f2528e9a61dfb6405ffceef4ff7cf2cddf917f0d9574f
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnedDirectory.ReadClaims(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: fca2322ea52f5850ffc915193a76ea396923069d7f65a926923a862ac016f425
title: "ProcessOwnedDirectory.ReadClaims"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Reads only current explicit claims, without inferring ownership from arbitrary directory names.

**Parameter `root`:** The producer-controlled absolute root.

**Parameter `cancellationToken`:** Cancels claim inspection.

**Returns:** Existing directories with exact lease paths and conservative combined owner states.

**Exception `T:System.IO.IOException`:** A claim cannot be read or its directory escapes the producer boundary.

**Exception `T:System.IO.InvalidDataException`:** A claim is malformed or its recorded identity does not match its location.
