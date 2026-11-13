---
uid: api.aa53f55ace7e478e94ec1cdd099548ee3223b3176776e644d13798716ecf55d8
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnedDirectory.RetireMetadataUnderOwnership(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 8fac78e28a13e6f6cc2e04fe40366189536fc8afb3da872b4e707ec1ce898b5f
title: "RetireMetadataUnderOwnership"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Retires claims for absent payloads while the caller exclusively owns the persistent root gate.

**Parameter `root`:** The exact producer root whose owner.lock the caller exclusively holds.

**Parameter `cancellationToken`:** Cancellation between complete metadata retirements.

**Returns:** The number of fully retired claims.

## Remarks

Every participant must acquire the same owner gate before waiting for or opening a work lease.
