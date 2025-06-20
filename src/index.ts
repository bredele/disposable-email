import domains from "./domains.json";

// Set is better for large lists
const denyList = new Set<string>(domains);

/**
 * Returns true if the email has a domain that is in the deny list.
 */

export default (email: string): boolean => {
  const domain = email.split("@")[1];
  return denyList.has(domain);
};

// export list of domains in case we might need it elsewhere
export { domains };
