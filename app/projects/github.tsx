import { Octokit, App } from "octokit";



const github = new Octokit({
  auth: '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',
});

export const dataRepo = async () => {
  try {
    const result = await github.request('GET /user/repos');
    const data = result.data
    return data
  } catch (error) {
    throw new Error
  }
}