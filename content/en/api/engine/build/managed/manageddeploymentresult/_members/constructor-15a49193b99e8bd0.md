---
uid: api.15a49193b99e8bd028551f50fe760812e6d5500bd530c61fa52ec19f0e73c664
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentResult.#ctor(Inno.Build.Managed.ManagedDeploymentId,System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: 86c8341212c39e5ef80a561b090656afec2c2652f1498ac3420330b31f6454d3
title: "Constructor"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Freezes successful publication evidence without granting ownership of the pipeline's staging root.

**Parameter `deployment`:** The compiler identity that produced this output.

**Parameter `outputDirectory`:** The directory containing the completed managed publication.

**Parameter `sdkIdentity`:** The exact managed SDK selected from the entry project's configuration.

**Parameter `files`:** The nonempty set of relative output file paths, copied before returning to the pipeline.
