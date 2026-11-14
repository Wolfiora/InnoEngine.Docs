---
uid: api.9e1865ad3a69a20385da0510903ee71f8935f1f5616ff4c7cbda2fe72a883aa5
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentId.#ctor(System.String)"
source: xml
reviewed: 08e6f8eff54ebf85ef842f8c37bfa2aea78e802f42371e8730a5f7b4d7903d3d
title: "ManagedDeploymentId.Constructor"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Validates a stable portable provider identity.

## Parameters

**Parameter `value`:** A nonempty lowercase identifier composed of letters, digits and hyphens.

## Exceptions

**Exception `T:System.ArgumentException`:** The identity is empty or contains nonportable characters.
