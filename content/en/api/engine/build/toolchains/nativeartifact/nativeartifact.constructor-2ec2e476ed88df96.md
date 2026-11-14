---
uid: api.2ec2e476ed88df96db4cd56427c794bf7718af2128880998c58714b24fe52aed
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeArtifact.#ctor(System.String,System.String,Inno.Build.Toolchains.NativeArtifactRole)"
source: xml
reviewed: cf98914d6dbc1248463383fa77f189b1f4a1b56b642308c814c9dbf7383af613
title: "NativeArtifact.Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures an output independently of platform suffix conventions.

**Parameter `logicalId`:** The unique producer-owned output identity.

**Parameter `file`:** The absolute output path retained by the product's reading ownership.

**Parameter `role`:** The explicitly declared link or deployment role.

**Exception `T:System.ArgumentException`:** The identity, path or role is invalid.
