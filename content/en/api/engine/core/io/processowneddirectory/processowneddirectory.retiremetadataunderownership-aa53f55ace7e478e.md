---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.aa53f55ace7e478e94ec1cdd099548ee3223b3176776e644d13798716ecf55d8
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnedDirectory.RetireMetadataUnderOwnership(System.String,System.Threading.CancellationToken)
title: ProcessOwnedDirectory.RetireMetadataUnderOwnership
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: 6d647ed1e7035be5c64215257930effde0a3383cb5ac8689c7bf3eb49a1555ae
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `root`:** The exact producer root whose owner.lock the caller exclusively holds.

**Parameter `cancellationToken`:** Cancellation between complete metadata retirements.

## Returns

The number of fully retired claims.

## Remarks

Every participant must acquire the same owner gate before waiting for or opening a work lease.
