import CardPoli from "./component/cardPoli";

function App() {
  let dokter = ["Ners Muhammad Alim Kakani", "Mahmud Terserah", "Ahmad Yusuf"]
  let poli = ["Bedah", "Penyakit Dalam", "Endokrin"]
  return (
    <>
      <div className="grid grid-cols-3 h-[80vh]">
        <div className="col-span-2 flex justify-center items-center">
          <video
            className="rounded-xl border-2 border-white"
            height="100%"
            width="98%"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/1.mp4" type="video/mp4" />
            your browser doesn't support this feature
          </video>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <div className="border-2 border-white p-2 rounded-xl w-[95%] h-[100%]">
            <marquee className="p-2 text-center w-full" height="100%" behavior="scroll" direction="up" scrollamount="3" loop>
              <CardPoli 
                poli = {poli[0]}
                dokter = {dokter[0]}
              />
              <CardPoli 
                poli = {poli[1]}
                dokter = {dokter[1]}
              />
              {/* <CardPoli 
                poli = {dokter[2]}
                dokter = {poli[2]}
              /> */}
            </marquee>
          </div>
        </div>
      </div>
      <footer className="w-full shadow-sm fixed bottom-0">
        <div className="marquee-footer py-2 bg-white text-red-500 font-bold shadow-none">
          <p>Paperless Hospital (Best Digital Management Hospital System)</p>
        </div>
        <div className="bg-gradient-to-br from-blue-700 via-blue-500 to-blue-600 text-center py-3 shadow-2xl shadow-black">
          copyright &copy; {new Date().getFullYear()} by Paperless Hospital
        </div>
      </footer>
    </>
  );
}

export default App;
