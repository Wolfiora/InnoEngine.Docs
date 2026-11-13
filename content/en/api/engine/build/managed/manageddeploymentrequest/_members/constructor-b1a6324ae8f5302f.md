---
uid: api.b1a6324ae8f5302f05f981e7c54708b64df156b8aa212c29025ad7f4347cc1c7
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentRequest.#ctor(System.String,System.String,System.String,System.String,System.String)"
source: xml
reviewed: e4d81ecff16dd4b50272ed1a952152b3912c424131869db2458a071bf3d41326
title: "Constructor"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Resolves all filesystem locations without starting processes or creating output directories.

**Parameter `projectPath`:** The prepared entry project with explicit code references, generated registrations and native inputs.

**Parameter `runtimeIdentifier`:** The managed toolchain's exact target identifier.

**Parameter `codeInputDirectory`:** The isolated directory containing the frozen code inputs referenced by the entry project.

**Parameter `outputDirectory`:** The empty build-owned staging directory; final installation remains the pipeline's responsibility.

**Parameter `logDirectory`:** The build-owned directory receiving process output and SDK selection evidence.
