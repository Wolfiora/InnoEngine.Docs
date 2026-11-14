---
uid: api.8a5dd0696202627733aa00cbab95e2eff83f898a7bfdd018a4667d8a6630770a
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCacheCleanupPlan.Create(System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.BuildCacheOwnerDescriptor},Inno.Build.Toolchains.BuildCachePolicy,System.Boolean,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 867c35d4812173ea2306bbc22fc211d83d1f6384d4e011e2a60c95e04141c4af
title: "BuildCacheCleanupPlan.Create"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Plans retirement by budget pressure or an explicit request to retire every unreferenced artifact.

## Parameters

**Parameter `workspace`:** The absolute checkout boundary; no owner may manage it or its parent.

**Parameter `owners`:** Explicit registrations; callbacks remain borrowed until execution completes.

**Parameter `policy`:** The immutable size, free-space and duration budgets.

**Parameter `retireAll`:** Whether to propose all unreferenced generations regardless of size pressure.

**Parameter `cancellationToken`:** Cancels planning before any directory is removed.

**Parameter `targetId`:** An exact producer-declared target filter, or null to manage all registered scopes. Outside-scope generations and their dependencies remain protected.

## Returns

A fixed proposal; execution rechecks ownership, roots and active readers before deletion.

## Exceptions

**Exception `T:System.ArgumentException`:** Owners overlap, identities repeat, or dependency metadata forms a cycle.

**Exception `T:System.IO.IOException`:** An owner, artifact or lease escapes its boundary or traverses a link.

**Exception `T:System.IO.InvalidDataException`:** An inventory has ambiguous ownership or undeclared dependencies.

**Exception `T:System.OperationCanceledException`:** Planning was canceled.

**Exception `T:System.TimeoutException`:** Inventory exceeded the complete operation budget; no artifact was removed.
