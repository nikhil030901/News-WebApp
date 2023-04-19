// CPP program to demonstrate optimal page replacement algorithm.
#include <bits/stdc++.h>
using namespace std;

bool search(int key, vector<int> &fr)
{
    for (int i = 0; i < fr.size(); i++)
        if (fr[i] == key)
            return true;
    return false;
}

int predict(int pages[], vector<int> &fr, int pn, int index)
{

    int res = -1, farthest = index;
    for (int i = 0; i < fr.size(); i++)
    {
        int j;
        for (j = index; j < pn; j++)
        {
            if (fr[i] == pages[j])
            {
                if (j > farthest)
                {
                    farthest = j;
                    res = i;
                }
                break;
            }
        }

        if (j == pn)
            return i;
    }

    return (res == -1) ? 0 : res;
}

int optimalPage(int pages[], int pn, int frames)
{

    vector<int> fr;

    int hit = 0;
    for (int i = 0; i < pn; i++)
    {

        if (search(pages[i], fr))
        {
            hit++;
            continue;
        }

        if (fr.size() < frames)
            fr.push_back(pages[i]);

        else
        {
            int j = predict(pages, fr, pn, i + 1);
            fr[j] = pages[i];
        }
    }
    int x = pn - hit;
    return x;
}

int main()
{
    int size;
    int frames;
    cout << "Enter the total no. of refrences = ";
    cin >> size;
    cout << "Enter the total no. of frames = ";
    cin >> frames;
    int pages[size];
    for (int i = 0; i < size; i++)
    {
        cout << "Enter reference number " << i + 1 << " = ";
        cin >> pages[i];
    }
    int pn = sizeof(pages) / sizeof(pages[0]);
    cout << "Page Faults in Optimal Page replacement algoritm is = " << optimalPage(pages, pn, frames);
    return 0;
}